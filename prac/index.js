function F() {
  return F;
}

alert(new F() instanceof F);
alert(new F() instanceof Function);
