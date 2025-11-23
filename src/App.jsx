import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState("") // for the task
  const [detail, setDetail] = useState("") // the detail of the task
  const [worklist, setworklist] = useState([]) // this is the array which helps to create the slides as well as also helps to delete from it's key 


  const submitHandler= (e)=>{  //basically we are just making it to handle the unnecessary refresh or rerendring of the page with e.preventDefault
    e.preventDefault();
  
  }

  const taskshower=()=>{ 


    const copyworklist=[...worklist]
    copyworklist.push({task,detail})

    setworklist(copyworklist)

    setTask("")
    setDetail("")
    
  }
  const deleterunner=(e)=>{
   const copyworklist=[...worklist]
    copyworklist.splice(e,1)
    setworklist(copyworklist)

  }



  return (
    <div className='h-screen  lg:flex bg-black text-white'>
      
     <form className=" flex p-10  lg:w-1/2 justify-between items-start gap-5" onSubmit={ submitHandler}>

    
    <div className='flex gap-4 w-full items-start flex-col'>
        <h1 className=' text-5xl font-bold inline'>Add Notes</h1>
        
        <input type="text" placeholder='Enter NOtes Heading' className='px-5 py-2 border-2 rounded w-full outline-none' value={task} onChange={(e)=>{
          setTask(e.target.value)
        }} />
        <textarea className='h-50 w-full px-5 py-2 border-2 rounded outline-none text-white ' placeholder='Write Details' value={detail} onChange={(e)=>{
          setDetail(e.target.value)
        }}/>

        <button className='bg-white w-full h-15 text-black font-medium text-2xl  active:scale-95 ' onClick={()=>{
          taskshower()
          
        }}> Add Notes </button>
    </div>


      
      </form> 

      <div className='lg:w-1/2 lg:border-l-4 pl-3 h-full overflow-auto'>
        <h1 className=' font-bold mt-5 pl-10 text-5xl'>Recent Notes</h1>
        <div className='pl-10 flex flex-wrap gap-5 mt-5'>
          {
            worklist.map((item,index)=>(
              <div key= {index} className="h-70 w-50 bg-amber-50 rounded-2xl text-black text-center flex  flex-col justify-between items-center bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] " >
              
              <div className=''>
                <h1 className='text-2xl mt-5 mb-4 capitalize font-bold'>{item.task} </h1>
              <p className='text-1xl font-medium'> {item.detail}</p>
              </div>

            <button onClick={()=>{
              deleterunner(index)
            }
              

            } className='bg-red-500 w-1/2 h-10 mb-4 text-black font-medium  rounded-2xl mt-5 sticky active:scale-95'>Delete</button>
             
              </div>
            ))
          }
          
       
         

        </div>
      
      </div>

      
    </div>
  )
}

export default App