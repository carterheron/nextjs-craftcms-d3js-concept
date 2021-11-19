export { getLinkLocation, isCurrentNode }

function getLinkLocation(nodeUri) {
    if (nodeUri) {
        if (nodeUri.startsWith("http")) {
            return (nodeUri)
        } else return (process.env.baseUrl + nodeUri);
    } else return "/";
}

function isCurrentNode(nodeUri, currentNavItem) {
    if (nodeUri && currentNavItem) {
        if (nodeUri == currentNavItem) {
            return (
                <span>Format Current Nav Here</span>
            )
        }
    }
    return null;
}