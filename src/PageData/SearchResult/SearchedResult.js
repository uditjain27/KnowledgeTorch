import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import PreLoader from "../../UI/PreLoader";
import PreLoader2 from "../../UI/PreLoader2";
import PreLoader3 from "../../UI/PreLoader3";
import ViewPopup from "../../ViewDocument/ViewPopup";
import { fetchSearchDetails } from './../../store/uploadDetails-ApiCalling';
import SearchedDocsCard from './SearchedDocsCard';
import { useHistory } from 'react-router-dom';

import classes from './SearchedDocsCard.module.css';
import classeses from './../Profile/Contributions.module.css';


const SearchedResult = (props) => {
  const isLoading = useSelector((state) => state.uiStore.isLoading);
  const keyword = useSelector((state) => state.searchedDocsStore.keyword);

  const dispatch = useDispatch();
  const location = useLocation();
  const vari = new URLSearchParams(location.search);
  useEffect(() => {
    if (vari.get('keyword') !== keyword) {
      dispatch(fetchSearchDetails(vari.get('keyword')));
    }
  }, []);

  const details = useSelector((state) => state.searchedDocsStore.list);
  const history = useHistory();
  const newContriHandler = () => {
    history.push('/uploads');
    console.log("New Contribution");
  };


  return (
    <Fragment>
      {
        isLoading && <PreLoader3></PreLoader3>
      }
      {
        !isLoading && <div className={classes.search__fix}>
          Searched result for : <span className={classes.search__keyword}>
            {vari.get('keyword')}
          </span>
        </div>
      }
      {
        !isLoading && <div className={classes.body}>
          {
            details.length === 0 ?
              <div className={classes.full_width}>
                <div className={classeses.full_width}>
                  <button onClick={newContriHandler} className={`${classeses.custom_btn} ${classeses.btn}`}>New Contribution
                    <i className="fa fa-solid fa-upload"></i>
                  </button>
                </div>
                <p className={classes.no_result}>No resource available for this topic</p>
              </div>
              : details.map((ele) => <span key={ele.id}>
                <SearchedDocsCard details={ele} key={ele.id}>
                </SearchedDocsCard>
              </span>)
          }
          {/* {
            details && <Route path='/home/content/:documentId'><ViewPopup></ViewPopup></Route>
          } */}
        </div>
      }
    </Fragment>
  )
}

export default SearchedResult;