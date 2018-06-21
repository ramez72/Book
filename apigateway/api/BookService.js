//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./BookService_types');
//HELPER FUNCTIONS AND STRUCTURES

var BookService_getAllBooks_args = function(args) {
  this.dummy = null;
  if (args) {
    if (args.dummy !== undefined && args.dummy !== null) {
      this.dummy = args.dummy;
    }
  }
};
BookService_getAllBooks_args.prototype = {};
BookService_getAllBooks_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.dummy = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_getAllBooks_args.prototype.write = function(output) {
  output.writeStructBegin('BookService_getAllBooks_args');
  if (this.dummy !== null && this.dummy !== undefined) {
    output.writeFieldBegin('dummy', Thrift.Type.STRING, 1);
    output.writeString(this.dummy);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_getAllBooks_result = function(args) {
  this.success = null;
  this.excep = null;
  if (args instanceof ttypes.ServiceException) {
    this.excep = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Book]);
    }
    if (args.excep !== undefined && args.excep !== null) {
      this.excep = args.excep;
    }
  }
};
BookService_getAllBooks_result.prototype = {};
BookService_getAllBooks_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Book();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.excep = new ttypes.ServiceException();
        this.excep.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_getAllBooks_result.prototype.write = function(output) {
  output.writeStructBegin('BookService_getAllBooks_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.excep !== null && this.excep !== undefined) {
    output.writeFieldBegin('excep', Thrift.Type.STRUCT, 1);
    this.excep.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_getBookById_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
BookService_getBookById_args.prototype = {};
BookService_getBookById_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_getBookById_args.prototype.write = function(output) {
  output.writeStructBegin('BookService_getBookById_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_getBookById_result = function(args) {
  this.success = null;
  this.excep = null;
  if (args instanceof ttypes.ServiceException) {
    this.excep = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Book(args.success);
    }
    if (args.excep !== undefined && args.excep !== null) {
      this.excep = args.excep;
    }
  }
};
BookService_getBookById_result.prototype = {};
BookService_getBookById_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Book();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.excep = new ttypes.ServiceException();
        this.excep.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_getBookById_result.prototype.write = function(output) {
  output.writeStructBegin('BookService_getBookById_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.excep !== null && this.excep !== undefined) {
    output.writeFieldBegin('excep', Thrift.Type.STRUCT, 1);
    this.excep.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_addBook_args = function(args) {
  this.book = null;
  if (args) {
    if (args.book !== undefined && args.book !== null) {
      this.book = new ttypes.Book(args.book);
    }
  }
};
BookService_addBook_args.prototype = {};
BookService_addBook_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.book = new ttypes.Book();
        this.book.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_addBook_args.prototype.write = function(output) {
  output.writeStructBegin('BookService_addBook_args');
  if (this.book !== null && this.book !== undefined) {
    output.writeFieldBegin('book', Thrift.Type.STRUCT, 1);
    this.book.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_addBook_result = function(args) {
  this.success = null;
  this.excep = null;
  if (args instanceof ttypes.ServiceException) {
    this.excep = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Book(args.success);
    }
    if (args.excep !== undefined && args.excep !== null) {
      this.excep = args.excep;
    }
  }
};
BookService_addBook_result.prototype = {};
BookService_addBook_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Book();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.excep = new ttypes.ServiceException();
        this.excep.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_addBook_result.prototype.write = function(output) {
  output.writeStructBegin('BookService_addBook_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.excep !== null && this.excep !== undefined) {
    output.writeFieldBegin('excep', Thrift.Type.STRUCT, 1);
    this.excep.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_updateBook_args = function(args) {
  this.book = null;
  if (args) {
    if (args.book !== undefined && args.book !== null) {
      this.book = new ttypes.Book(args.book);
    }
  }
};
BookService_updateBook_args.prototype = {};
BookService_updateBook_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.book = new ttypes.Book();
        this.book.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_updateBook_args.prototype.write = function(output) {
  output.writeStructBegin('BookService_updateBook_args');
  if (this.book !== null && this.book !== undefined) {
    output.writeFieldBegin('book', Thrift.Type.STRUCT, 1);
    this.book.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_updateBook_result = function(args) {
  this.success = null;
  this.excep = null;
  if (args instanceof ttypes.ServiceException) {
    this.excep = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Book(args.success);
    }
    if (args.excep !== undefined && args.excep !== null) {
      this.excep = args.excep;
    }
  }
};
BookService_updateBook_result.prototype = {};
BookService_updateBook_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Book();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.excep = new ttypes.ServiceException();
        this.excep.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_updateBook_result.prototype.write = function(output) {
  output.writeStructBegin('BookService_updateBook_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.excep !== null && this.excep !== undefined) {
    output.writeFieldBegin('excep', Thrift.Type.STRUCT, 1);
    this.excep.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_deleteBook_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
BookService_deleteBook_args.prototype = {};
BookService_deleteBook_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_deleteBook_args.prototype.write = function(output) {
  output.writeStructBegin('BookService_deleteBook_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookService_deleteBook_result = function(args) {
  this.success = null;
  this.excep = null;
  if (args instanceof ttypes.ServiceException) {
    this.excep = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.excep !== undefined && args.excep !== null) {
      this.excep = args.excep;
    }
  }
};
BookService_deleteBook_result.prototype = {};
BookService_deleteBook_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.excep = new ttypes.ServiceException();
        this.excep.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BookService_deleteBook_result.prototype.write = function(output) {
  output.writeStructBegin('BookService_deleteBook_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.excep !== null && this.excep !== undefined) {
    output.writeFieldBegin('excep', Thrift.Type.STRUCT, 1);
    this.excep.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BookServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BookServiceClient.prototype = {};
BookServiceClient.prototype.seqid = function() { return this._seqid; };
BookServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
BookServiceClient.prototype.getAllBooks = function(dummy, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getAllBooks(dummy);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAllBooks(dummy);
  }
};

BookServiceClient.prototype.send_getAllBooks = function(dummy) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAllBooks', Thrift.MessageType.CALL, this.seqid());
  var params = {
    dummy: dummy
  };
  var args = new BookService_getAllBooks_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BookServiceClient.prototype.recv_getAllBooks = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BookService_getAllBooks_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.excep) {
    return callback(result.excep);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAllBooks failed: unknown result');
};
BookServiceClient.prototype.getBookById = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getBookById(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBookById(id);
  }
};

BookServiceClient.prototype.send_getBookById = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBookById', Thrift.MessageType.CALL, this.seqid());
  var params = {
    id: id
  };
  var args = new BookService_getBookById_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BookServiceClient.prototype.recv_getBookById = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BookService_getBookById_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.excep) {
    return callback(result.excep);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBookById failed: unknown result');
};
BookServiceClient.prototype.addBook = function(book, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_addBook(book);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addBook(book);
  }
};

BookServiceClient.prototype.send_addBook = function(book) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addBook', Thrift.MessageType.CALL, this.seqid());
  var params = {
    book: book
  };
  var args = new BookService_addBook_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BookServiceClient.prototype.recv_addBook = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BookService_addBook_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.excep) {
    return callback(result.excep);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addBook failed: unknown result');
};
BookServiceClient.prototype.updateBook = function(book, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateBook(book);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBook(book);
  }
};

BookServiceClient.prototype.send_updateBook = function(book) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBook', Thrift.MessageType.CALL, this.seqid());
  var params = {
    book: book
  };
  var args = new BookService_updateBook_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BookServiceClient.prototype.recv_updateBook = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BookService_updateBook_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.excep) {
    return callback(result.excep);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBook failed: unknown result');
};
BookServiceClient.prototype.deleteBook = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deleteBook(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteBook(id);
  }
};

BookServiceClient.prototype.send_deleteBook = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteBook', Thrift.MessageType.CALL, this.seqid());
  var params = {
    id: id
  };
  var args = new BookService_deleteBook_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BookServiceClient.prototype.recv_deleteBook = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BookService_deleteBook_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.excep) {
    return callback(result.excep);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteBook failed: unknown result');
};
var BookServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
BookServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
BookServiceProcessor.prototype.process_getAllBooks = function(seqid, input, output) {
  var args = new BookService_getAllBooks_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAllBooks.length === 1) {
    Q.fcall(this._handler.getAllBooks.bind(this._handler), args.dummy)
      .then(function(result) {
        var result_obj = new BookService_getAllBooks_result({success: result});
        output.writeMessageBegin("getAllBooks", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ServiceException) {
          result = new BookService_getAllBooks_result(err);
          output.writeMessageBegin("getAllBooks", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getAllBooks", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAllBooks(args.dummy, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ServiceException) {
        result_obj = new BookService_getAllBooks_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getAllBooks", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getAllBooks", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BookServiceProcessor.prototype.process_getBookById = function(seqid, input, output) {
  var args = new BookService_getBookById_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBookById.length === 1) {
    Q.fcall(this._handler.getBookById.bind(this._handler), args.id)
      .then(function(result) {
        var result_obj = new BookService_getBookById_result({success: result});
        output.writeMessageBegin("getBookById", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ServiceException) {
          result = new BookService_getBookById_result(err);
          output.writeMessageBegin("getBookById", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBookById", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBookById(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ServiceException) {
        result_obj = new BookService_getBookById_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBookById", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBookById", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BookServiceProcessor.prototype.process_addBook = function(seqid, input, output) {
  var args = new BookService_addBook_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addBook.length === 1) {
    Q.fcall(this._handler.addBook.bind(this._handler), args.book)
      .then(function(result) {
        var result_obj = new BookService_addBook_result({success: result});
        output.writeMessageBegin("addBook", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ServiceException) {
          result = new BookService_addBook_result(err);
          output.writeMessageBegin("addBook", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("addBook", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addBook(args.book, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ServiceException) {
        result_obj = new BookService_addBook_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addBook", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addBook", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BookServiceProcessor.prototype.process_updateBook = function(seqid, input, output) {
  var args = new BookService_updateBook_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBook.length === 1) {
    Q.fcall(this._handler.updateBook.bind(this._handler), args.book)
      .then(function(result) {
        var result_obj = new BookService_updateBook_result({success: result});
        output.writeMessageBegin("updateBook", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ServiceException) {
          result = new BookService_updateBook_result(err);
          output.writeMessageBegin("updateBook", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBook", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBook(args.book, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ServiceException) {
        result_obj = new BookService_updateBook_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBook", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBook", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BookServiceProcessor.prototype.process_deleteBook = function(seqid, input, output) {
  var args = new BookService_deleteBook_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteBook.length === 1) {
    Q.fcall(this._handler.deleteBook.bind(this._handler), args.id)
      .then(function(result) {
        var result_obj = new BookService_deleteBook_result({success: result});
        output.writeMessageBegin("deleteBook", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ServiceException) {
          result = new BookService_deleteBook_result(err);
          output.writeMessageBegin("deleteBook", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("deleteBook", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deleteBook(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ServiceException) {
        result_obj = new BookService_deleteBook_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("deleteBook", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("deleteBook", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
