import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Styled from 'styled-components';

const StyledPage = styled.div`
    background: white;
    color: black;
`;


class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Meta/>
                <Header/>
                {this.props.children}
            </StyledPage>
        );
    }
}

export default Page;