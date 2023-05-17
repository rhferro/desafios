import { Container } from './styles';
import logo from '../../assets/images/RRLogo.png';
import { Button } from '../Button';
import { useState } from 'react';
import { NewStickModal } from '../NewStickModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <img src={logo} alt="React Reminder Logo" />
      <NewStickModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <Button title="Adicionar Lembrete" click={() => handleOpenModal()} />
    </Container>
  );
}
