function mooncakeSays(message) {
  let mooncake = '(o.ohhhhhhh)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
