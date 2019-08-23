import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #1e90ff;
        text-decoration: none;
        font-size: 16px;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #eee;
    }
    div {
        flex: 1;
        margin-left: 15px;
    }
    strong {
        font-size: 16;
    }

    a {
        text-decoration: none;
        color: #333;

        &:hover {
            color: #0000ff;
        }
    }

    span {
        background: #cae1ff;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }
`;

export const IssueFilter = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 15px;

    button {
        border-radius: 4px;
        background: #cae1ff;
        outline: 0;
        border: 0;
        padding: 8px;
        margin: 0 0.25rem;

        &:nth-child(${props => props.active + 1}) {
            background: #4682b4;
            color: white;
        }
    }
`;

export const PageActions = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    button {
        transition: opacity 0.25s ease-out;
        border-radius: 4px;
        background-color: #1e90ff;
        outline: 0;
        border: 0;
        padding: 8px;
        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    }
`;
