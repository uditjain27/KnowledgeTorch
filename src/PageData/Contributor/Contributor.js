import { Fragment, useEffect, useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import classes from './Contributor.module.css';

function Contributor(props) {

    const [number, setNumber] = useState(1);
    const [obj, setObj] = useState({});
    const fetchURL = '';


    const abcd = function (e) {
        const ids = e.target.id;
        if (ids === 'rad1') {
            setNumber(1);
        } else if (ids === 'rad2') {
            setNumber(2);
        } else if (ids === 'rad3') {
            setNumber(3);
        }
    }

    const fetchData = async () => {
        const response = await fetch(fetchURL);
        if (!response.ok) {
            throw new Error("Cannot fetch");
        }

        const result = await response.json();
        return result;
    }

    const fetchDataHandler = async () => {
        try {
            const data = await fetchData();
            setObj(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchDataHandler();
    }, [])

    return (
        <Fragment onLoad>
            <div className={classes.card}>
                <input checked='checked' id='rad1' name='rad' type='radio' className={classes.input} onClick={abcd} />
                <div htmlFor='rad1'>
                    <h1>1</h1>
                    <div className={classes.btn}></div>
                </div>
                <input id='rad2' name='rad' type='radio' className={classes.input} onClick={abcd} />
                <div htmlFor='rad2'>
                    <h1>2</h1>
                    <div className={classes.btn}></div>
                </div>
                <input id='rad3' name='rad' type='radio' className={classes.input} onClick={abcd} />
                <div htmlFor='rad3'>
                    <h1>3</h1>
                    <div className={classes.btn}></div>
                </div>
                <input type='checkbox' className={classes.input} />
                <main className={classes.main}>
                    {number === 1 ? 'Udit Jain' : ""}
                    {number === 2 ? 'Shivam Garg' : ""}
                    {number === 3 ? 'Anshul Gupta' : ""}
                </main>
                <a>Read More</a>
                <p>
                    <div>
                        <span>College : </span>
                        {obj[number]?.data?.college ? obj[number].data.college : 'Dr. Akhilesh Das Gupta Institute of Technology and Management'}
                    </div>
                    <div>
                        <span>Course : </span>
                        {obj[number]?.data?.course ? obj[number].data.course : 'B.Tech'}
                    </div>
                    <div>
                        <span>Total Views : </span>
                        {obj[number]?.data?.viewCount ? obj[number].data.viewCount : '1212'}
                    </div>
                    <div>
                        <span>Total Downloads : </span>
                        {obj[number]?.data?.downloadCount ? obj[number].data.downloadCount : '2121'}
                    </div>
                    <div>
                        <span>Views last month : </span>
                        {obj[number]?.data?.viewCountLastMonth ? obj[number].data.viewCountLastMonth : '1212'}
                    </div>
                    <div>
                        <span>Downloads last month : </span>
                        {obj[number]?.data?.downloadCountLastMonth ? obj[number].data.downloadCountLastMonth : '2121'}
                    </div>
                </p>
                <div className={classes.shapes}></div>
                <div className={classes.photo}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={classes.blob}>
                    <div className={classes.glob}></div>
                </div>
            </div>




            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={classes.svg}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <svg viewBox="0 0 400 400" className={classes.svg}>
                <defs>
                    <filter id="duotone-filter-post-one">
                        <feColorMatrix type="matrix" values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"></feColorMatrix>
                    </filter>
                </defs>
            </svg>

        </Fragment>
    );
}

export default Contributor;





/*

  <input checked="checked" id="rad1" name="rad" type="radio"/>
  <div for="rad1">
    <h1>1</h1>
    <div class="btn"></div>
  </div>
  <input id="rad2" name="rad" type="radio">
  <div for="rad2">
    <h1>2</h1>
    <div class="btn"></div>
  </div>
  <input id="rad3" name="rad" type="radio">
  <div for="rad3">
    <h1>3</h1>
    <div class="btn"></div>
  </div>
  <input type="checkbox">
  <a>Read More</a>
  <p>Phasellus nec sem in justo pellentesque facilisis. In hac habitasse platea dictumst. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
  <div class="shapes"></div>
  <div class="photo">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="blob">
    <div class="glob"></div>
  </div>
 */