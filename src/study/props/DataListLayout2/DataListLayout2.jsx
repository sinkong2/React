function DataListLayout2 ({dataList}) {
    return <ul>
        {
            dataList.map((li, index) =>
            <li key = {index}>{li}</li>)
        }
    </ul>;
}

export default DataListLayout2;