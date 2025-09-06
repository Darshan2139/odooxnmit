import React from 'react';
import styled from 'styled-components';
import { ChevronRight, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-bottom: 8px;
  font-size: 14px;
`;

const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme, active }) => active ? theme.primary : theme.soft2};
  font-weight: ${({ active }) => active ? 500 : 400};
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Separator = styled(ChevronRight)`
  color: ${({ theme }) => theme.soft2};
  font-size: 16px;
`;

const Breadcrumb = ({ items = [] }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbItem>
        <BreadcrumbLink to="/">
          <Home style={{ fontSize: 16 }} />
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Separator />
          <BreadcrumbItem active={index === items.length - 1}>
            {item.link ? (
              <BreadcrumbLink to={item.link}>
                {item.label}
              </BreadcrumbLink>
            ) : (
              item.label
            )}
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
