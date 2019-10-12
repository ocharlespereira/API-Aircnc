import React from 'react';

export default function Login() {
  return 
  <>
    <p>
      Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
    </p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input 
        type="email" 
        id="email" 
        placeholder="Seu melhor e-mail"
        value = {email}
        onChange={event => setEmail(event.target.value)} 
      />

      <button className="btn" type="submit">Entrar</button>
    </form>
  </>  
}