// 'use client';
// import { useEffect, useState } from 'react';
// import { addUser, getUser } from '../../actions/userAction';
// import Button from './RegisterForm';

// function Form() {
//   const [selectedAction, setSelectedAction] = useState('');

//   useEffect(() => {
//     console.log(selectedAction);
//   }, [selectedAction]);

//   function selectActionHandler(event: any) {
//     event.preventDefault();
//     console.log(event.target.id);
//     setSelectedAction(event.target.id);
//     window.location.reload();
//   }
  
//   return (
//     // <form
//     //   action={selectedAction === 'register' ? addUser : getUser}
//     //   className="border-2 border-black rounded flex justify-evenly flex-col">
//     //   <div className="border-2 border-black rounded p-4 m-4 flex justify-evenly">
//     //     <label className="m-2" htmlFor="username">
//     //       Username:
//     //     </label>
//     //     <input type="email" className="border-2 m-2" name="email" />
//     //   </div>
//     //   <div className="border-2 border-black rounded p-4 m-4 flex justify-evenly">
//     //     <Button
//     //       id={'register'}
//     //       onClickHandler={selectActionHandler}
//     //       btnCntntTxt={'Register'}
//     //     />
//     //     {/* <Button
//     //       id={'login'}
//     //       onClickHandler={selectActionHandler}
//     //       btnCntntTxt={'Login'}
//     //     /> */}
//     //   </div>

//     //   {/* <div className="p-4">
//     //         <label htmlFor="password">Password dummy</label>
//     //         <input type="text" className="border-2" name="email" />
//     //         </div> */}
//     // </form>
//   );
// }

// export default Form;
