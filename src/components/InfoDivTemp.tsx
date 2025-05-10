import { motion } from 'motion/react';
import type { ReactElement } from 'react';

export default function InfoDivAnimateTemp(props: {
     isVisible: boolean;
     showTemp: boolean;
     value1: ReactElement;
     value2: ReactElement;
}) {
     return (
          <motion.div
               animate={{ opacity: props.isVisible ? 1 : 0 }}
               transition={{ duration: 1 }}>
               {props.showTemp ? props.value1 : props.value2}
          </motion.div>
     );
}
