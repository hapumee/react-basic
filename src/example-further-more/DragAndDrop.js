import React, { Component } from 'react';

const styles = {
    left: { width: '250px', height: '150px', border: '1px solid #DCDCDC', float: 'left' },
    right: { width: '250px', height: '150px', border: '1px solid #DCDCDC', float: 'left', marginLeft: '40px' },
    draggable: { marginTop: '35px' },
    droppable: { margin: '0 auto', width: '50%', marginTop: '80px' },
    para: { marginRight: '11px', border: '1px solid #DCDCDC', padding: '12px 16px', borderRadius: '50%', width: '15px', float: 'left' }
};

const items = [
    { no: 1, text: 'This is text 1' },
    { no: 2, text: 'This is text 2' },
    { no: 3, text: 'This is text 3' },
    { no: 4, text: 'This is text 4' }
];

class DragDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
            leftContainer: [],
            rightContainer: []
        };
    }

    onDragStart = (event, text) => {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData('text/plain', text);
    }

    allowDrop = (event) => {
        event.preventDefault();
    }

    onDropLeft = (event) => {
        event.preventDefault();

        const data = event.dataTransfer.getData('text/plain');

        let { leftContainer } = this.state;
        leftContainer.push(data);

        this.setState({ leftContainer });
    }

    onDropRight = (event) => {
        event.preventDefault();

        const data = event.dataTransfer.getData('text/plain');

        let { rightContainer } = this.state;
        rightContainer.push(data);

        this.setState({ rightContainer });
    }

    render() {
        const { items, leftContainer, rightContainer } = this.state;

        return (
            <div>
                {/*Draggable Text Area*/}
                <div style={styles.draggable}>
                    Draggable texts:<br />
                    <div style={{ display: 'inline-block' }}>
                        {
                            items.map((item) => {
                                return <p style={styles.para}
                                          draggable="true"
                                          onDragStart={(event) => this.onDragStart(event, item.text)}
                                >{item.no}</p>;
                            })
                        }
                    </div>
                </div>

                {/*Droppable Area*/}
                <div style={styles.droppable}>
                    {/*Left Container*/}
                    <div style={styles.left} onDragOver={this.allowDrop} onDrop={this.onDropLeft}>
                        Left Container
                        {
                            leftContainer.map((item) => {
                                return <p>{item}</p>;
                            })
                        }
                    </div>

                    {/*Right Container*/}
                    <div style={styles.right} onDragOver={this.allowDrop} onDrop={this.onDropRight}>
                        Right Container
                        {
                            rightContainer.map((item) => {
                                return <p>{item}</p>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DragDrop;