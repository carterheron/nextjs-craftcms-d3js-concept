const FunctionButton = props => (
    <button onClick={props.onClickFunction}
        className={"rounded shadow hover:shadow-none text-center text-black px-2 py-2 " + props.classDetails}>{props.buttonText}
    </button>
);

export default FunctionButton;