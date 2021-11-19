import dynamic from "next/dynamic";

export default function pageBuilder(data) {

    if (!data.pageBuilder) {
        return <div className="py-32 text-center">No page content</div>;
    }

    let pageContents = [];

    for (var i = 0; i < data.pageBuilder.length; i++) {
        let block = data.pageBuilder[i];
        let blockType = block.__typename.split('_')[1];

        switch (blockType) {
            case "blockType":
                const Component = dynamic(() => import("../blocks/" + blockType));
                pageContents.push(<Component
                    key={block.id}
                ></Component>);
                break;
            default:
                pageContents.push(<div className="py-32 text-center">Invalid Block Type: {blockType}</div>);
        }
    }

    return ({pageContents});
}