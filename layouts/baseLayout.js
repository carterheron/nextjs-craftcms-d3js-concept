import Head from '../components/head';

export default function BaseLayout(props) {

    return (
        <div>
            {Head(props)}
            <main>
                {props.children}
            </main>
        </div>
    );
}
