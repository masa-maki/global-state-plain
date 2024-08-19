import React from 'react';
import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>email</dt>
        <dd>{user.email}</dd>
        <dt>tel</dt>
        <dd>{user.tel}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 3rem;
    padding-bottom: 0.5rem;
    overflow-wrap: break-word;
  }
`;
