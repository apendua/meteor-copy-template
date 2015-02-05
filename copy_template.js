
Template.__copy__ = function (name, copyOf) {
  Template.__checkName(name);
  Template[name] = new Template(name, Template[copyOf].renderFunction);
}
