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


        if ((updatedName1 && updatedName2==='') || (updatedName1==='')|| (updatedName2==='')){
            setDisplayOutput(`Please Enter Valid Names.`)
            setoutputImage(6);

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
             let finalOutPut=(Flames[0]);
             switch (finalOutPut){
                
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
                default:
                    setoutputImage(6);
                    break; 

             }
            setDisplayOutput(`The relationship between ${name1}  and  ${name2}  will end in ${finalOutPut} `)

        }

    };

    return (
        <div className="flex font-bold text-white bg-gradient-to-b from-gray-900 via-slate-500 to-zinc-100 flex-col h-screen w-screen  md:flex-col "  >
            <div className=' float-left flex flex-row h-[10%] w-screen items-center '>
            <ExternalLink  href='https://akilraj-1153.github.io/Akilraj;-N-Portfolio/'><img  src={navimg} alt='logo' className='h-[10vh] w-[10vh]' ></img></ExternalLink> 
            <h1 className='text-4xl inline md:hidden md:text-3xl ml-2  w-fit '>Flames Game</h1>
            </div>
            <div className='flex flex-col md:flex-row h-[100%] sm:h-[90%]  w-screen'>
                <div className=' h-fit p-8 w-screen flex flex-col md:justify-center items-center gap-10 md:w-1/4 md:h-full'>
                   <div className='text-5xl hidden md:text-4xl mt-5 md:inline'>
                        <h1 className='text-5xl hidden md:text-4xl mt-5 md:inline'>Flames Game</h1>
                    </div>
                    <div className='w-3/4 '>
                        <form className='flex flex-col gap-4 w-full'>
                            <div className='flex flex-col gap-1 w-full '>
                                <label className='h-10 w-full' htmlFor="name1">Enter Your Name</label>
                                <input className='h-12 text-black bg-slate-50 rounded-lg w-full p-4'  id="name1" type="text" placeholder='Your Name' value={name1} onChange={handleName1Change}></input>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='h-10 w-full' htmlFor="name2">Enter Your Crush Name</label>
                                <input className='h-12 text-black bg-slate-50 rounded-lg w-full p-4 '  id="name2" type="text" placeholder='Your Crush Name' value={name2} onChange={handleName2Change}></input>
                            </div>
                            <div className='flex  gap-2  rounded-md  justify-center items-center flex-row '>
                                <button className='h-10 w-2/4 overflow-hidden bg-pink-500 rounded-lg' type="submit" onClick={handleButtonClick}>Submit</button>
                                <button className='h-10 w-2/4 overflow-hidden bg-pink-500 rounded-lg' onClick={handereset} >Try Again</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <div className='gap-2 h-2/4 w-screen text-2xl md:text-3xl justify-start items-center flex md:w-3/4 md:h-full flex-col'>
                    <div className=' p-0 text-center h-[30%] md:h-[10%] align-center items-center flex'>{displayOutput}</div>
                    <img className='rounded-xl h-[90%] w-[90%] md:h-[80%] sm:w-auto' alt="feelings" src={Displayimages[outputImage]}></img>
                </div>

            </div>
            
        </div>
    );
}

export default Home;
