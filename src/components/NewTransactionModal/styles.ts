import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;
    background: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    height: 4rem;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    background: var(--green);
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
