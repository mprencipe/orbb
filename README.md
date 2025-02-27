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

### Package registries
- npm via [all-the-package-names](https://www.npmjs.com/package/all-the-package-names)

### Permutation strategies
- Bitflip: Checks (single) bitflipped variants of valid package names in a registry, e.g. *foobar* -> *fgobar, noobar, foobav..*
