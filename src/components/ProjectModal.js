import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ProjectModal = ({ isOpen, closeModal }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com o valor do input, como enviar para o servidor
    console.log('Valor do input:', inputValue);
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Exemplo de Modal"
    >
      <h2>Modal</h2>
      <p>Este é um exemplo de modal usando React Modal.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <button onClick={closeModal}>Fechar</button>
    </ReactModal>
  );
};

export default ProjectModal;
