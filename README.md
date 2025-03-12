```
      ~The supply attack chain tool~
 ::::::::  :::::::::  :::::::::  :::::::::
:+:    :+: :+:    :+: :+:    :+: :+:    :+:
+:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+
+#+    +:+ +#++:++#:  +#++:++#+  +#++:++#+
+#+    +#+ +#+    +#+ +#+    +#+ +#+    +#+
#+#    #+# #+#    #+# #+#    #+# #+#    #+#
 ########  ###    ### #########  #########

 ```

 Orbb is a tool for researching supply chain vulnerabilities

## Use
- Run `npm ci` first
- Run `node orbb.js -r <package-registry> -s <permutation-strategy> -p <packagename> `
- If no permutation strategy is specified, all permutations will be printed
- Multiple permutations are supported with additional `-s <strategy>` switches

### Package registries
- npm via [all-the-package-names](https://www.npmjs.com/package/all-the-package-names)

### Permutation strategies
- Bitflip: Checks (single) bitflipped permutations of valid package names in a registry, e.g. *foobar* -> *fgobar, noobar, foobav..*
  - Usage: `-s bitflip`
- Omission: Removes up to n characters, where *n* is the maximum number of characters omitted. **Warning!** This can produce a huge number of permutations, experiment with a small amount first.
  - Usage: `-s o<n>`
- Duplication: Generates permutations where a single character is duplicated
  - Usage: `-s duplicate`
