import { Container } from './style';
import Modal from 'react-modal';
import { useState } from 'react';
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewStickModal({ isOpen, onRequestClose }: ModalProps) {
  Modal.setAppElement('#root');

  const [stickyName, setStickyName] = useState('');
  const [stickyDescription, setStickyDescription] = useState('');

  function handleForSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      className="react-modal-content"
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.409)' } }}
    >
      <Container onSubmit={handleForSubmit}>
        <h1>Criar Lembrete</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setStickyName(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={(e) => setStickyDescription(e.target.value)}
          ></textarea>
        </div>
        <button title="Adicionar Lembrete" />
      </Container>
    </Modal>
  );
}
