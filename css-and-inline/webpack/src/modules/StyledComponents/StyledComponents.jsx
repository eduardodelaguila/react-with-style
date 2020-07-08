import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'context';
import data from './data';

const StyledComponents = (props) => {
    const [theme, setThemeCtx] = useContext(ThemeContext);

    useEffect(() => {
        setThemeCtx('red');
    }, []);

    const Section = styled.section`
        height: 100%;
        width: 100%;
    `;

    const TweetFeed = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 1em 0;
    `;

    const TweetContainer = styled.div`
        display: flex;
        background-color: #11212a;
        height: ${props.height};
        max-width: 550px;
        box-sizing: border-box;
        padding: 8px 16px;
        border: 1px solid #ababab;
        transition: background-color 0.3s;
        cursor: pointer;

        &:hover {
            background-color: #28373f;
        }
    `;

    const PhotoContainer = styled.div`
        width: 6.5em;
        height: 100%;
        margin: 0 8px 0 0;
    `;
    const Photo = styled.img`
        height: 60px;
        width: 60px;
        border-radius: 50%;
        object-fit: cover;
    `;
    const DataContainer = styled.div``;
    const AccountContainer = styled.div`
        display: flex;
    `;
    const Account = styled.p`
        color: #475467;
    `;
    const AccountName = styled.p`
        margin: 0 4px 0 0;
        font-weight: 600;
        color: #fff;
    `;
    const Date = styled.p`
        margin: 0 4px;
        color: #475467;
    `;
    const Verified = styled.span`
        margin: 0 4px 0 0;
        font-weight: 600;
        color: #fff;
    `;
    const Tweet = styled.p`
        font-size: 1.1em;
        line-height: 1.2em;
        color: #fff;
        margin: 8px 0;
    `;
    const Img = styled.img`
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
    `;

    const renderTweets = () => {
        return data.map(
            ({
                accountName,
                account,
                accountImg,
                verified,
                tweet,
                img,
                date,
            }) => (
                <TweetContainer>
                    <PhotoContainer>
                        <Photo src={accountImg} />
                    </PhotoContainer>

                    <DataContainer>
                        <AccountContainer>
                            <AccountName>{accountName}</AccountName>
                            {verified && (
                                <Verified>
                                    <i className="fas fa-badge-check"></i>
                                </Verified>
                            )}
                            <Account>{account}</Account>
                            <Date> • {date}</Date>
                        </AccountContainer>
                        <Tweet>{tweet}</Tweet>
                        {img && <Img src={img}></Img>}
                    </DataContainer>
                </TweetContainer>
            )
        );
    };

    return (
        <Section className={theme}>
            <TweetFeed>{renderTweets()}</TweetFeed>
        </Section>
    );
};

export default StyledComponents;
