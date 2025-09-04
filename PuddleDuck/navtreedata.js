/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PuddleDuck", "index.html", [
    [ "Introduction", "index.html#intro_sec", null ],
    [ "Quick start", "index.html#quick_start", [
      [ "Host utilities (macOS/Linux)", "index.html#quick_host", null ],
      [ "Teensy firmware (build + upload)", "index.html#quick_teensy", null ]
    ] ],
    [ "Prerequisites", "index.html#prereq", null ],
    [ "Build variables", "index.html#build_vars", null ],
    [ "Teensy / PuddleDuck firmware", "index.html#teensy", [
      [ "Duckling install over SSH", "index.html#teensy_ssh", null ]
    ] ],
    [ "Runtime wheels (Python)", "index.html#runtime", null ],
    [ "Selecting a custom duck configuration", "index.html#config", [
      [ "Using local.ini (recommended)", "index.html#config_local", null ],
      [ "Using DUCK_CONFIG", "index.html#config_env", null ]
    ] ],
    [ "Configuration (default)", "index.html#yaml_overview", [
      [ "Example Duck configuration", "index.html#yaml_example", null ],
      [ "Motion mapping cheatsheet", "index.html#mapping", null ]
    ] ],
    [ "Makefile targets", "index.html#targets", [
      [ "Documentation", "index.html#docs", null ],
      [ "Cleaning", "index.html#cleaning", null ]
    ] ],
    [ "API (Protocol Buffers)", "API.html", [
      [ "Commands → PuddleDuck", "API.html#pdapi_cmd", [
        [ "CommandWrapper", "API.html#pdapi_CommandWrapper", null ],
        [ "PolicyStart", "API.html#pdapi_PolicyStart", null ],
        [ "PolicyAction", "API.html#pdapi_PolicyAction", null ],
        [ "JointMoveRadians", "API.html#pdapi_JointMoveRadians", null ],
        [ "FlashlightCommand", "API.html#pdapi_FlashlightCommand", null ],
        [ "JointZeroRef", "API.html#pdapi_JointZeroRef", null ]
      ] ],
      [ "Responses ← PuddleDuck", "API.html#pdapi_resp", [
        [ "ResponseWrapper", "API.html#pdapi_ResponseWrapper", null ],
        [ "Observation", "API.html#pdapi_Observation", null ],
        [ "JointFeedback", "API.html#pdapi_JointFeedback", null ]
      ] ],
      [ "Enveloping & stream semantics", "API.html#pdapi_enveloping", null ],
      [ "Examples", "API.html#pdapi_examples", [
        [ "CommandWrapper examples (pseudo-JSON for clarity)", "API.html#pdapi_ex_cmdwrap", null ],
        [ "ResponseWrapper examples (pseudo-JSON)", "API.html#pdapi_ex_respwrap", null ]
      ] ],
      [ "Related .proto files", "API.html#pdapi_files", null ]
    ] ],
    [ "Host Utilities", "HostUtilities.html", [
      [ "Xiamoi", "HostUtilities.html#xiaomi", [
        [ "cg_changeid — Change CyberGear Motor ID", "HostUtilities.html#cg_changeid", [
          [ "Usage", "HostUtilities.html#CGChangeIdUsage", null ],
          [ "Notes", "HostUtilities.html#CGChangeIdNotes", null ]
        ] ]
      ] ],
      [ "Unitree", "HostUtilities.html#unitree", [
        [ "go1_changeid — Change Unitree Go1 Motor ID", "HostUtilities.html#go1_changeid", [
          [ "Usage", "HostUtilities.html#Go1ChangeIdUsage", null ],
          [ "Notes", "HostUtilities.html#Go1ChangeIdNotes", null ]
        ] ],
        [ "go2_changeid — Change Unitree Go2 Motor ID", "HostUtilities.html#go2_changeid", [
          [ "Usage", "HostUtilities.html#Go2ChangeIdUsage", null ],
          [ "Notes", "HostUtilities.html#Go2ChangeIdNotes", null ]
        ] ],
        [ "go1_scanbus — Scan Unitree Go1 Motors", "HostUtilities.html#go1_scanbus", [
          [ "Usage", "HostUtilities.html#Go1ScanBusUsage", null ],
          [ "Notes", "HostUtilities.html#Go1ScanBusNotes", null ]
        ] ],
        [ "go2_scanbus — Scan Unitree Go2 Motors", "HostUtilities.html#go2_scanbus", [
          [ "Usage", "HostUtilities.html#Go2ScanBusUsage", null ],
          [ "Notes", "HostUtilities.html#Go2ScanBusNotes", null ]
        ] ],
        [ "a1_changeid — Change Unitree A1 Motor ID", "HostUtilities.html#a1_changeid", [
          [ "Usage", "HostUtilities.html#A1ChangeIdUsage", null ],
          [ "Notes", "HostUtilities.html#A1ChangeIdNotes", null ]
        ] ],
        [ "a1_scanbus — Scan Unitree A1 Motors", "HostUtilities.html#a1_scanbus", [
          [ "Usage", "HostUtilities.html#A1ScanBusUsage", null ],
          [ "Notes", "HostUtilities.html#A1ScanBusNotes", null ]
        ] ]
      ] ]
    ] ],
    [ "CONTRIBUTORS", "ContributorsPage.html", null ],
    [ "LICENSE", "01LicensePage.html", null ],
    [ "NOTICE", "NoticePage.html", null ],
    [ "Class List", "annotated.html", "annotated" ],
    [ "Class Members", "functions.html", [
      [ "All", "functions.html", "functions_dup" ],
      [ "Functions", "functions_func.html", "functions_func" ],
      [ "Variables", "functions_vars.html", "functions_vars" ],
      [ "Typedefs", "functions_type.html", null ],
      [ "Enumerations", "functions_enum.html", null ],
      [ "Enumerator", "functions_eval.html", null ],
      [ "Related Symbols", "functions_rela.html", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"01LicensePage.html",
"classpd_1_1HardwareSerialStreamProxy.html#adc4a2a26907fa20f6d7c7c5210e3106f",
"classpd_1_1SerialUSBState.html#a8d37e8b069c6363cb798c6212ae4caa3",
"classpd_1_1motor_1_1xiaomi_1_1Cybergear.html#aaf3006ab4c7ecba12284c2911543b4e8",
"structpd_1_1SBUSStreamProxy_1_1Packet.html#a0339b3d70d421bc1d7575daa4ec81c3b",
"structpd_1_1motor_1_1unitree_1_1Uki_1_1Feedback.html#ad9c2dacdc2509a3bdfd230af2909d9ad"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';