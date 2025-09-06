import React, { useState } from 'react';
import styled from 'styled-components';
import { Add, Create, GroupAdd } from '@mui/icons-material';

const FABContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const MainFAB = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(128, 26, 230, 0.3);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(128, 26, 230, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const SubFAB = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.8)'};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.05);
  }
`;

const FloatingActionButton = ({ onCreateProject, onCreateTeam }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateProject = () => {
    onCreateProject();
    setIsOpen(false);
  };

  const handleCreateTeam = () => {
    onCreateTeam();
    setIsOpen(false);
  };

  return (
    <FABContainer>
      <SubFAB isOpen={isOpen} onClick={handleCreateTeam}>
        <GroupAdd />
      </SubFAB>
      <SubFAB isOpen={isOpen} onClick={handleCreateProject}>
        <Create />
      </SubFAB>
      <MainFAB onClick={toggleMenu}>
        <Add style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease-in-out' }} />
      </MainFAB>
    </FABContainer>
  );
};

export default FloatingActionButton;
