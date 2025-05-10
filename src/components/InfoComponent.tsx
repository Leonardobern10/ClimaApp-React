import type { ReactElement } from 'react';

export default function InfoComponent(props: {
     currentInfo: string;
     value: number;
     unity: string;
}): ReactElement {
     return (
          <p className="container-temp-info">
               {props.currentInfo}{' '}
               <span className="temp-info">
                    {props.value} {props.unity}
               </span>
          </p>
     );
}
