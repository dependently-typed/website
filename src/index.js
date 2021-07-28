const monadStyle = "font-family: monospace; font-size: 16px; font-weight: bold; color: #6495ED;";
const coolStyle = "font-family: monospace; font-size: 18px; font-weight: bold; color: #E39FF6; text-shadow: 3px 3px 0 #A32CC4;";
const msg = `
(>>=) :: m a -> ( a -> m b ) -> m b
(>>) :: m a -> m b -> m b
return :: a -> m a
`;
console.log(`%c${msg}`, monadStyle)
console.log("%cwhy yes, i am cool ;)", coolStyle)
