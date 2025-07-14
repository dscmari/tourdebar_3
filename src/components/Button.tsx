'use client';
function Button(props: any) {
  return (
    <button
      type="submit"
      id={props.id}
      onClick={props.onClickHandler}
      className="cursor-pointer text-white bg-black py-2 px-4 rounded">
      {props.btnCntntTxt}
    </button>
  );
}

export default Button;
