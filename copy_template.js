var __define__ = Template.__define__;

var __func__ = {};

Template.__define__ = function (name, raw_func) {
  __func__[name] = raw_func;
  return __define__(name, raw_func);
}

Template.__copy__ = function (name, copyOf) {
  __func__[name] = __func__[copyOf];
  return __define__(name, __func__[copyOf]);
}
