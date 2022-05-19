import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FacebookShareButton } from 'react-share';

export default function TestA() {
    return (
        <>
            <Helmet>
                <title>테스트 - A</title>
            </Helmet>
            <FacebookShareButton
                url={window.location.href}
                hashtag="#Plait"
                className="Demo__some-network__share-button"
                style={{ marginRight: 8 }}
            >
                <img
                    alt="Facebook"
                    src={""}
                    style={{ width: 24, height: 24, }}
                />
            </FacebookShareButton>
            테스트 페이지 AA
        </>
    );
}