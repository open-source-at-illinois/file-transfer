import React from "react";
class FileUploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = async (event) => {
        const reader = new FileReader()
        reader.onload = async (e) => {
            const t = (e.target.result)
            this.setState({name: e.target.files[0], text: t})
        }
        reader.readAsText(event.target.files[0])
    }
    handleSubmit(event) {
        alert('file at' + this.state.path + "\n file stuff is:" + this.state.text)
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={e => this.handleChange(e)}></input>
                <input type="submit" value="Yes"/>
            </form>
            </div>
        )
    }
}
const DragDropArea = () => {
    return (
        <>
        <div className={"jumbotron max-height"}>Drag-Drop Area</div>
        <FileUploadComponent></FileUploadComponent>
        </>
    )
}

export default DragDropArea;
