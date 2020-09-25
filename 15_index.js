const makeNuclearbutton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;

  const launch = () => {
    timeWithoutDestruction = -1;
    return 'BOOOM';
  };
  setInterval(passTime, 1000);

  return {
    // launch: launch,  //Don't want to give user access to launch, so don't return
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearbutton();
console.log(ohno.totalPeaceTime());
console.log(ohno.totalPeaceTime());
