import React, { useState } from "react";
import styles from "./Landing.module.css";
import logo from '../../Imagenes/logo.png';
import img1 from '../../Imagenes/img1.png';
import img8 from '../../Imagenes/img8.png';
import img2 from '../../Imagenes/img2.png';
import img3 from '../../Imagenes/img3.png';
import img4 from '../../Imagenes/img4.png';
import img5 from '../../Imagenes/img5.png';
import img6 from '../../Imagenes/img6.png';
import img7 from '../../Imagenes/img7.png';


export default function Landing() {
   

   

  const [input, setInput] = useState({ 
    name: "",
    email: "",
    subject: "",
    message: "",
   
  });

 
  const handleChange = (evento) => {
      setInput((input) => ({
        ...input,
         [evento.target.name]: evento.target.value
       }));
        console.log('este es el input', input)

     }
  

     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('este es el input del handle', input)
        const res = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        const data = await res.json();
        console.log(data);
    };
 
  
  return (
    <div>
    <div className={styles.container}> 
    <div className={styles.menu}>    
<div>     
  <img src={logo}/>
</div>    
 
 <div className={styles.menu2}>
<h3 >Home</h3>
<h3>About</h3>
<h3>Service</h3>
<h3>Feature</h3>
<h3>price</h3>
<h3>Contact</h3>
<h3>Login</h3>
</div>
</div>
        
<div className={styles.container1}>
<img src={img1} className={styles.simg1}/>
<div className={styles.containerDiv}>
<div> 
<h2>Quam eleifend metus commodo</h2>
</div>
<div>
<span>Luctus at sit amet urma. Quisque non augue tincidunt,egest<br/>as massa non, elementun sem. Suspendisse moliss nulla<br/>eu loren ultricies dapibus</span>
</div>
<div>
<img src={img8} className={styles.simg8} />
</div>
</div>
</div>


<div className={styles.container2}>
<div> 
    <h2>About us</h2>
<span>sed non massa quis nisl tincidunt posuere sit amet vitae sem. Praesent<br/>sed convallis quam. Donect hendreric neque sit amet tellus ornare et<br/>semper loren lacinia.Suspendisse ac pellentestque odio. Nunc pharetra<br/>malesuade nisi ac condimentum. Curabitur porttitor pulvinar</span>
</div>

<img src={img2} className={styles.simg2} />
</div>



<div className={styles.container3}>
<img src={img3} className={styles.simg3} />
<img src={img4} className={styles.simg4} />
<img src={img5} className={styles.simg5} />
</div>

<div className={styles.container4}>
<h2>loren ipsum dolor sit amet</h2>
<span>consectetur adipisinc elit maecenas facilisis ligula non ornare vehicula</span>
<img src={img6} className={styles.simg6}/>
</div>

<div className={styles.container5}>
<h2>what people say</h2>
<img src={img7} className={styles.simg7}/>

</div>
</div>
<div className={styles.form}>
<div className={styles.formName}>

        <div>
                     <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    onChange={handleChange}
                />
            </div>
            <div>
                
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="your Email"
                />
            </div>
            </div>
            <div>
                 <input
                    type="text"
                    name="subject"
                    placeholder="your subject"
                    onChange={handleChange}
                />
            </div>
            <div>
                 <input
                    type="text"
                    name="message"
                    placeholder="your message"
                    onChange={handleChange}
                />
            </div>
            </div>
            <div className={styles.btn}> 
       <button className={styles.btn1}>
            Reset
        </button>
         <button className={styles.btn2} onClick={handleSubmit}>
            Submit
        </button>
        </div>
        </div>
  );

}

