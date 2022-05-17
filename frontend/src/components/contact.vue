<template>
  <!-- Contact -->
  <div id="contact">
    <h2>Contact</h2>
    <div class="box-contact">
      <div class="formucontact">
        <h3>Contactez-moi</h3>
        <form action="contact" method="post">
          <div class="form-group">
            <label for="nom">Votre nom/prénom ou nom de votre entité</label>
            <input type="text" class="form-control" id="nom" name="nom" />
          </div>
          <div class="form-group">
            <label for="email"
              >Votre Email (afin que je puisse vous contacter)</label
            >
            <input type="email" class="form-control" id="email" name="email" />
          </div>
          <div class="form-group">
            <label for="message"
              >Vous voulez passer commande ? <br />
              Une petite recommandation ? <br />
              Un petit problème ? C’est par ici. Détaillez le tout, <br />
              je m’occuperais de vous !</label
            >
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn">Envoyer les informations</button>
        </form>
      </div>
      <div class="reseauxcontact">
        <h3>Mes liens utiles</h3>
        <p>Le dev'</p>
        <div class="logo-rs">
          <a href="https://www.linkedin.com/in/no%C3%A9mie-mallet-8796b014a/"
            ><img src="/img/linkedin.webp" alt="icone de LinkedIn"
          /></a>
          <a
            href="https://signal.group/#CjQKIO_229VwdjF6pUEgX_P1aFlsvqhdsUS3GdEuGmFN80BmEhCWgppLsf6SwsEo_vp2guu8"
            ><img src="/img/signal.webp" alt="icone de Signal"
          /></a>
          <a href="https://t.me/noemiedevweb"
            ><img src="/img/telegram.webp" alt="icone de Telegram"
          /></a>
        </div>
        <div class="grosboutons">
          <div class="box-links">
            <a href="https://www.codeur.com/-deathlove">
              <p>
                <img src="/img/codeur.webp" alt="Icone de code" />
              </p>
              <p>Ma page sur Codeur.com (plateforme de freelanceurs)</p>
            </a>
          </div>
          <div class="box-links">
            <a href="http://noemie-dev-web.slack.com">
              <p><img src="/img/slack.webp" alt="Logo de Slack" /></p>
              <p>
                Mon Slack (pour me contacter si besoin d'une site web vitrine ou
                autre)
              </p>
            </a>
          </div>
          <div class="box-links">
            <a href="https://github.com/noemie-ma/">
              <p>
                <img src="/img/github.webp" alt="Logo de Github" />
              </p>
              <p>
                Mon Github (pour voir de quelle manière est organisé mon code)
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>