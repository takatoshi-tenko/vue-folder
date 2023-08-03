<template>
  <div>
    <h1>TOP</h1>
    <nav id="breadcrumbs">
      <ul>
        <li>TOP</li>
      </ul>
    </nav>
    <section>
      <p>
        <RouterLink :to="{ name: 'MemberList' }"> 会員管理はこちら </RouterLink>
      </p>
    </section>
  </div>
</template>
