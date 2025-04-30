import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aprende a ser técnico',
    description: (
      <>
        Con WTI, aprende diferentes habilidades y conocimientos acerca de ser un
        técnico trabajando en Whirlpool.
      </>
    ),
  },
  {
    title: 'Whirlpool',
    description: (
      <>
        Trabaja con Whirlpool y vamos a resolver problemas de nuestros clientes.
      </>
    ),
  },
  {
    title: 'Aprende de forma rápida',
    description: (
      <>
        WTI te presentará toda la información, tareas y actividades de forma
        interactiva.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
