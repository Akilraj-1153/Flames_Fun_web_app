import React, { useState} from 'react';
import { ExternalLink } from 'react-external-link';

function Home({Displayimages,navimg}) {
   
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [displayOutput,setDisplayOutput]=useState('');
    const [outputImage,setoutputImage]=useState(6);

    const handleName1Change = (event) => {
        setName1(event.target.value);
    };

    const handleName2Change = (event) => {
        setName2(event.target.value);
    };
    const handereset =()=>{
        setName1('');
        setName2('');
        setoutputImage(6)
        setDisplayOutput('');
    }
   

    const handleButtonClick = (event) => { 
        event.preventDefault();

    

        
        
        let updatedName1=name1.toLocaleLowerCase().replace(/\s+/g, '');
        let updatedName2=name2.toLocaleLowerCase().replace(/\s+/g, '');


        if (updatedName1 && updatedName2==='' || updatedName1===''|| updatedName2===''){
            setDisplayOutput(`Please Enter Valid Names.`) 
        }
        else if (updatedName1===updatedName2){
        setDisplayOutput(`You entered the same name, sorry!`) 
        }
        else{

            let modifiedFirstName = Array.from(updatedName1);
            let modifiedSecondName = Array.from(updatedName2);
    
            for (let i = 0; i < modifiedFirstName.length; i++) {
                for (let j = 0; j < modifiedSecondName.length; j++) {
                    if (modifiedFirstName[i] === modifiedSecondName[j]) {
                        modifiedFirstName.splice(i, 1);
                        modifiedSecondName.splice(j, 1);
                        i--;
                        break;
                    }
                }
            }
    
            let flamesValue = modifiedFirstName.length + modifiedSecondName.length;
            let Flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
    
            let currentIndex = 0;
            let indexToRemove = 0;
    
            for (let round = 1; round < 6; round++) {
                if (flamesValue > 0) {
                    indexToRemove = (currentIndex + flamesValue - 1) % Flames.length;
                    Flames.splice(indexToRemove, 1);
                    currentIndex = indexToRemove;
                }
            }
             let finalOutput=(Flames[0]);
             switch (finalOutput){
                
                case 'Friends':
                    setoutputImage(0);
                    break;
                case 'Lovers':
                    setoutputImage(1);
                    break;
                case 'Affection':
                    setoutputImage(2);
                    break;
                case 'Marriage':
                    setoutputImage(3);
                    break;
                case 'Enemy':
                    setoutputImage(4);
                    break;
                case 'Sibling':
                    setoutputImage(5);
                    break;     
             }
            setDisplayOutput(`The relationship between ${name1}  and  ${name2}  will end in ${finalOutput} `)

        }

    };

    return (
        <div className="flex font-bold text-white bg-gradient-to-b from-gray-900 via-slate-500 to-zinc-100 flex-col h-screen w-screen bg-contain bg-center bg-no-repeat md:flex-row "  >
           <div>
           <ExternalLink className='h-[10vh] w-[10vh]' href='https://akilraj-1153.github.io/Akilraj-N-Portfolio/'><img  src={navimg} alt='logo' className='h-[10vh] w-[10vh' ></img></ExternalLink> 

           </div>
            <div className=' h-3/4 w-screen flex flex-col justify-center items-center gap-10 md:w-1/4 md:h-screen'>
                <div>
                <h1 className='text-5xl md:text-4xl mt-5 '>Flames Game</h1>

                </div>
                <div className='w-3/4 '>
                    <form className='flex flex-col gap-4 w-full '>
                        <div className='flex flex-col gap-1 w-full '>
                            <label className='h-10 w-full' htmlFor="name1">Enter Your Name</label>
                            <input className='h-12 text-black bg-slate-50 rounded-lg w-full p-4'  id="name1" type="text" placeholder='Your Name' value={name1} onChange={handleName1Change}></input>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='h-10 w-full' htmlFor="name2">Enter Your Crush Name</label>
                            <input className='h-12 text-black bg-slate-50 rounded-lg w-full p-4 '  id="name2" type="text" placeholder='Your Crush Name' value={name2} onChange={handleName2Change}></input>
                        </div>
                        <div className='flex  gap-2  rounded-md  justify-center items-center flex-row'>
                            
                            <button className='h-10 w-2/4 bg-pink-500 rounded-lg' type="submit" onClick={handleButtonClick}>Submit</button>
                            <button className='h-10 w-2/4 bg-pink-500 rounded-lg' onClick={handereset} >Try Again</button>
                            
                        </div>
                    </form>
                </div>
            </div>
            <div className=' gap-5 h-2/4 w-screen text-3xl justify-center items-center flex md:w-3/4 md:h-screen flex-col'>
                <div className='text-center'>{displayOutput}</div>
                <img className='rounded-xl h-3/4 w-auto' src={Displayimages[outputImage]}></img>
            </div>
        </div>
    );
}

export default Home;
