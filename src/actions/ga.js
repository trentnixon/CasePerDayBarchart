import ReactGA from 'react-ga';

export function GA(c,a,l){
    ReactGA.event({
        category:c,
        action:a,
        label:l
      });
}