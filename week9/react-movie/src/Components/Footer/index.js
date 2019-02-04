import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            wide: 5,
        }
    }
    prev = () => {
        const {goToPage, page} = this.props;
        goToPage(page-1);
    }
    next = () => {
        const {goToPage, page} = this.props;
        goToPage(page+1);
    }
    goToPage = (page) => {
        this.props.goToPage(page);
    }
    render() {
        const { page, total_pages, total_results } = this.props
        const { wide } = this.state;
        let pagenumbers = [];
        for(let i= page<=wide ? 1 : page >= total_pages - wide ? total_pages-wide*2: page-wide ;
            (page<=wide&&i<=wide*2&&i<=total_pages)||(page>wide&&(i<=total_pages&&i<=page+wide));
            i++){
                pagenumbers.push(i);
        }
        return (
            <footer>
                <div>
                    You are in {page} of {total_pages}. Total Results: {total_results}<br />
                </div>
                <div className="pagination">
                    {page===1 || <button onClick={this.prev}>Previous</button>}
                    {page>wide && <button onClick={()=>this.goToPage(page-wide-1)}>...</button>}
                    {pagenumbers.map((element) => {return <button disabled={element===page} key={page+'key'+element} onClick={()=>this.goToPage(element)}>{element}</button>})}
                    {page<total_pages-wide && <button onClick={()=>this.goToPage( page>wide? page+wide+1 : 11)}>...</button>}
                    {page===total_pages || <button onClick={this.next}>Next</button>}
                </div>
            </footer>
        );
    }
}

export default Footer;