import type { ReactElement } from 'react';

export default function DisplayDateInfo(props: {
     data: string;
     dateInfo: string;
}): ReactElement {
     return (
          <p className="description">
               {props.data},{' '}
               <span className="font-bold text-xs md:text-xl">
                    {props.dateInfo}
               </span>
          </p>
     );
}
