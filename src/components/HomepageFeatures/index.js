import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build what matters',
    Svg: require('@site/static/img/undraw_meta_erlang_prioritise_re_r5xu.svg').default,
    description: (
      <>
        meta-erlang provides many recipes for common services made with Erlang/OTP and Elixir.
        And it's also possible to integrate your own application into meta-erlang and Yocto Project.
        Building and delivering what is relevante to support your use case.
      </>
    ),
  },
  {
    title: 'BEAM Ecosystem friendly',
    Svg: require('@site/static/img/undraw_working-together_r43a.svg').default,
    description: (
      <>
        Not only the two biggest BEAM-based language (Elixir and Erlang) are
        supported. You can develop your project using any BEAM language.
      </>
    ),
  },
  {
    title: 'Powered by The Yocto Project',
    Svg: require('@site/static/img/undraw_meta_erlang_powerful_re_frhr.svg').default,
    description: (
      <>
        meta-erlang layer brings BEAM to Yocto Project ecosystem. You can use other layers
        to integrate and build custom solutions.
      </>
    ),
  },
  {
    title: 'Not only for embedded',
    Svg: require('@site/static/img/undraw_meta_erlang_server_cluster_jwwq.svg').default,
    description: (
      <>
        The Yocto Project is famous for building custom Linux distribution for embedded context.
        But is also possible to build distros for bare metal servers, cloud and custom SDKs
        (Software Development Kit).
      </>
    ),
  },
  {
    title: 'Multiple architecture ready',
    Svg: require('@site/static/img/undraw_meta_erlang_decide_re_ixfw.svg').default,
    description: (
      <>
        Develop your product supporting as many architecture you needed. It's 
        easy to change from x86-32 to AArch64 and test it using QEMU. Others architecture
        are supported as well.
      </>
    ),
  },
];

function Feature({
  feature,
  className,
}) {
  return (
    <div className={clsx('col', className)}>
      <div className="text--center">
        <feature.Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const firstRow = FeatureList.slice(0, 3);
  const secondRow = FeatureList.slice(3);

  return (
    <div className="container text--center">
      <section className={styles.features}>
        <div className="container">
          <div className="row margin-bottom--lg">
            {firstRow.map((feature, idx) => (
              <Feature key={idx} feature={feature} />
            ))}
          </div>
          <div className="row">
            {secondRow.map((feature, idx) => (
              <Feature
                key={idx}
                feature={feature}
                className={clsx('col--4', idx === 0 && 'col--offset-2')} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
