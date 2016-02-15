import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>Mantra Twitter</h1>
    </header>
    <main>
      {content()}
    </main>
  </div>
)
