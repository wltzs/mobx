/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 * 
 * Welcome to the mobservable sources! To get an global overview of how Mobservable internally works,
 * this is a good place to start: 
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 * 
 * Source folders:
 * ===============
 * 
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the Mobservable algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 * 
 */

import {registerGlobals} from "./core/globalstate";
registerGlobals();

// TODO: all exports in sync with docs?
// TODO: optimize packaging?
export {    observable, IObservableValue                         } from "./api/observable";
export {    isObservable                                         } from "./api/isobservable";
export {    extendObservable                                     } from "./api/extendobservable";
export {    observe                                              } from "./api/observe";
export {    autorun, autorunAsync, autorunUntil, when            } from "./api/autorun";
export {    expr                                                 } from "./api/expr";
export {    toJSON                                               } from "./api/tojson";
export {    createTransformer                                    } from "./api/createtransformer";

export {    asReference, asFlat, asStructure                     } from "./types/modifiers";
export {    isObservableObject                                   } from "./types/observableobject";
export {    isObservableArray, fastArray,
			IObservableArray, IArrayChange, IArraySplice         } from "./types/observablearray";
export {    isObservableMap, map, ObservableMap                  } from "./types/observablemap"

export {    untracked                                            } from "./core/globalstate";
export {    transaction                                          } from "./core/transaction";
export {    Atom                                                 } from "./core/atom";
export {    Reaction                                             } from "./core/reaction";

/**
 * 'Private' elements that are exposed for testing and debugging utilities
 */

import {quickDiff} from "./utils/utils";
import {SimpleEventEmitter} from "./utils/simpleeventemitter";
import {isComputingDerivation, resetGlobalState,  } from "./core/globalstate";

export const _ = {
	quickDiff,
	resetGlobalState
}

import {
	getDependencyTree, getObserverTree, trackTransitions, allowStateChanges,
	ITransitionEvent, IObserverTree, IDependencyTree
} from "./api/extras";
import {Lambda} from "./utils/utils";

export const extras = {
	getDependencyTree,
	getObserverTree,
	trackTransitions,
	SimpleEventEmitter,
	isComputingDerivation,
	allowStateChanges
};