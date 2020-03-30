import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Container, Content, Title, List, Item, AuthorName } from './styles';

const Home = () => {
  const [author, setAuthor] = useState({
    name: '',
    link: '',
  });

  useEffect(() => {
    // Example request
    const getAuthor = async () => {
      const response = await api.get('/vini-dev');

      if (response.status === 200)
        setAuthor({
          name: response.data.name,
          link: response.data.html_url,
        });
    };

    getAuthor();
  }, []);

  return (
    <Container>
      <Content>
        <Title>Packages and configs</Title>
        <List>
          <Item>styled-components</Item>
          <Item>redux</Item>
          <Item>reduxsauce</Item>
          <Item>duck pattern</Item>
          <Item>eslint</Item>
          <Item>prettier</Item>
          <Item>dark mode</Item>
          <Item>axios</Item>
          <Item>auth with token</Item>
          <Item>root import</Item>
          <Item>layout</Item>
          <Item>airbnb style guide</Item>
        </List>
        <AuthorName href={author.link} target="_blank" alt="Author">
          Por: {author.name}
        </AuthorName>
      </Content>
    </Container>
  );
};

export default Home;
