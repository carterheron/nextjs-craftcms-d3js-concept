const LinkButton = props => (
    <a className={"rounded shadow hover:shadow-none text-center text-black px-2 py-2 " + props.classDetails} href={props.href}>
        {props.buttonText}
    </a>
);

export default LinkButton;