const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Política de Privacidad
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
        <p>
          En ICCAS, nos comprometemos a proteger su privacidad y garantizar la
          seguridad de la información personal que recopilamos. Esta política de
          privacidad explica cómo recopilamos, usamos y protegemos su
          información cuando utiliza nuestros servicios, incluyendo la
          participación en estudios, investigaciones o el acceso a nuestras
          guías visuales de porciones y pesos de alimentos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Información que Recopilamos
        </h2>
        <p>
          Recopilamos información personal que usted nos proporciona
          voluntariamente, incluyendo pero no limitándose a:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Datos de contacto, como nombre, correo electrónico y número de
            teléfono.
          </li>
          <li>
            Información relacionada con su participación en estudios o
            encuestas.
          </li>
          <li>
            Información demográfica, como edad, sexo y ubicación geográfica.
          </li>
        </ul>
        <p>
          Además, podemos recopilar datos sobre el uso de nuestros servicios,
          como los registros de acceso y las preferencias de usuario.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Uso de la Información</h2>
        <p>
          Utilizamos la información que recopilamos para los siguientes fines:
        </p>
        <ul className="list-disc pl-6">
          <li>Realizar estudios de investigación y análisis nutricional.</li>
          <li>
            Mejorar nuestros servicios y herramientas, como la Guía Visual de
            Porciones.
          </li>
          <li>
            Comunicarnos con usted respecto a nuevos estudios, investigaciones o
            actualizaciones.
          </li>
          <li>
            Garantizar la calidad y precisión de los datos recopilados en
            nuestros estudios.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Protección de la Información
        </h2>
        <p>
          Implementamos medidas de seguridad físicas, electrónicas y
          administrativas para proteger la información personal que recopilamos.
          Sin embargo, ningún método de transmisión de datos por Internet o
          almacenamiento electrónico es completamente seguro, por lo que no
          podemos garantizar la seguridad absoluta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compartir Información</h2>
        <p>
          No compartimos su información personal con terceros, salvo en los
          siguientes casos:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Con proveedores de servicios que nos ayudan en la realización de
            estudios y encuestas.
          </li>
          <li>
            Cuando lo exija la ley o si consideramos que es necesario para
            proteger nuestros derechos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Derechos del Usuario</h2>
        <p>
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal. Si desea ejercer estos derechos o tiene alguna pregunta
          sobre cómo manejamos su información, puede ponerse en contacto con
          nosotros a través de los medios proporcionados en esta página.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Cambios en la Política de Privacidad
        </h2>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en
          cualquier momento. Cualquier cambio será publicado en esta página y
          entrará en vigencia en el momento de su publicación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p>
          Si tiene preguntas o inquietudes sobre esta Política de Privacidad,
          puede contactarnos a través de:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Correo electrónico:{" "}
            <a href="mailto:Jorgeeniedenunez@gmail.com">
              Jorgeeniedenunez@gmail.com
            </a>
          </li>
          <li> Buenos Aires, Argentina</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
