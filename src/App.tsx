import React from 'react';
import './App.css';
import Space from "./Space";
import { useAccount } from "wagmi";
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { config } from "./index";
import { loanAbi } from "./loan";
import { erc20Abi } from "viem";

function App() {

    const {openConnectModal,} = useConnectModal();
    const {openAccountModal,} = useAccountModal();
    const {address,} = useAccount();

    const loanContract = "0x";
    const sbtA = "0x";
    const sbtB = "0x";
    const bugs = "0x";

    return (
        <div style={{height: 'auto', marginLeft: "20px"}}>
            <div style={{whiteSpace: 'pre', fontFamily: 'monospace'}}>{`
╔════════════════════════════════════════════════════════════════════╗
║       ██████╗  █████╗ ██████╗   ██╗    ██╗██╗██╗     ██╗           ║
║       ██╔══██╗██╔══██╗██╔══██║  ██║    ██║██║██║     ██║           ║
║       ██████╔╝███████║██║  ██║  ██║ █╗ ██║██║██║     ██║           ║
║       ██╔══██╗██╔══██║██║  ██║  ██║███╗██║██║██║     ██║           ║
║       ██████╔╝██║  ██║██████╔╝  ╚███╔███╔╝██║███████╗███████╗      ║
║       ╚═════╝ ╚═╝  ╚═╝╚════╝     ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝      ║
╚════════════════════════════════════════════════════════════════════╝
       `}
            </div>

            <div className={"sixtyFour purple"}>
                [NOTICE TO ALL STUMPS: PROCEED WITH CAUTION]
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                <button
                    className={"b sixtyFour"}
                    onClick={address ? (openAccountModal) : (openConnectModal)}
                >
                    {"「" + (address ? "log out" : "login") + "」"}
                </button>
            </div>
            <Space/>
            <div className={"sixtyFour blue"}>
                [SECURITY CHECK]
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                SCANNING FOR BADGE … <span className={"green"}>[YES]</span>
            </div>
            <div className={"sixtyFour"}>
                SCANNING FOR UNAUTHORIZED DEVICES … <span className={"red"}>[ERROR]</span>
            </div>
            <Space/>
            <div className={"sixtyFour green"}>
                [ACCESS GRANTED]
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                WELCOME TO <span className={"yellow"}>[BADWILL]</span>, STUMP <span
                className={"yellow"}>[{address}]</span>
            </div>
            <Space/>
            <div className={"sixtyFour purple"}>
                [GUIDANCE]
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                BADWILL ENCOURAGES ALL OPERATIVES TO DEAL CAUTIOUSLY.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                UPON PRESENTING THE [BADGE] AT OUR COUNTER, THE BEARER WAS GRANTED AN EMERGENCY LOAN OF 500 $BUGS UNDER
                THE AUSPICES OF BADWILL.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                THIS TRANSACTION, THOUGH SEEMINGLY BENIGN, COMES WITH A STRINGENT CONDITION AS DICTATED BY THE CRYPTIC
                LAWS GOVERNING OUR OPERATIONS.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                MISUSE OR NEGLIGENCE CAN LEAD TO ALTERATIONS IN YOUR EXISTENTIAL LEDGER THAT ARE NOT EASILY RECTIFIED.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                EVERY TRANSACTION IS A PACT, AND EVERY PACT IS A RISK.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                TREAD LIGHTLY, BARGAIN WISELY.
            </div>
            <Space/>
            <div className={"sixtyFour"} style={{display: "flex", flexDirection: "row"}}>
                <button
                    className={"b sixtyFour"} style={{width: "250px"}}
                    onClick={async () => {
                        if (!address) {
                            return
                        }
                        try {
                            // @ts-ignore
                            const requestHash = await writeContract(config, {
                                address: loanContract,
                                abi: loanAbi,
                                functionName: 'borrow',
                            })
                            console.log("request hash: ", requestHash)
                            // @ts-ignore
                            const requestResult = await waitForTransactionReceipt(config, {
                                hash: requestHash,
                                pollingInterval: 1_000,
                            });
                            console.log("result", requestResult)

                            alert("HASH: " + requestResult.transactionHash)
                        } catch (e) {
                            console.error(e)
                            alert("something went wrong:" + e)
                            return
                        }

                    }}
                >
                    {"「LOAN 500 BUGS」"}
                </button>
                <button
                    className={"b sixtyFour"} style={{width: "250px", marginLeft: "30px"}}
                    onClick={async () => {
                        if (!address) {
                            return
                        }
                        try {
                            // @ts-ignore
                            const approveHash = await writeContract(config, {
                                address: bugs,
                                abi: erc20Abi,
                                functionName: 'approve',
                                args: [loanContract, BigInt(525 * 10 ** 18)]
                            })
                            console.log("request hash: ", approveHash)
                            // @ts-ignore
                            const approveResult = await waitForTransactionReceipt(config, {
                                hash: approveHash,
                                pollingInterval: 1_000,
                            });
                            console.log("result", approveResult)

                            // @ts-ignore
                            const requestHash = await writeContract(config, {
                                address: loanContract,
                                abi: loanAbi,
                                functionName: 'repay',
                            })
                            console.log("request hash: ", requestHash)
                            // @ts-ignore
                            const requestResult = await waitForTransactionReceipt(config, {
                                hash: requestHash,
                                pollingInterval: 1_000,
                            });
                            console.log("result", requestResult)

                            alert("HASH: " + requestResult.transactionHash)
                        } catch (e) {
                            console.error(e)
                            alert("something went wrong:" + e)
                            return
                        }
                    }}
                >
                    {"「PAY 525 BUGS」"}
                </button>
            </div>
            <Space/>
            <div className={"sixtyFour purple"}>
                [WARNING]
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                THE LOAN MUST BE REPAID BY THE END OF YOUR SHIFT.
                FAILURE TO COMPLY WILL RESULT IN UNDISCLOSED CONSEQUENCES TO YOUR RECORDS.
            </div>
            <Space/>
            <div className={"sixtyFour red"}>[MALFUNCTION RECORDS]</div>
            <Space/>
            <div className={"sixtyFour"}>
                MAY MANIFEST AS BENIGN OR AS CATASTROPHICALLY
                IRREVERSIBLE.
                THE CHOICE IS YOURS.
            </div>
            <Space/>
            <div className={"sixtyFour"}>
                BADWILL INDUSTRIES INTERNATIONAL, 770 ECHO CHAMBER, AW 69420
            </div>

            <div style={{whiteSpace: 'pre', fontFamily: 'monospace'}}>
                {`
                                —zÏÏÏÏÏÏüüüÏÏÏüÏÏÏí›                                     ›—íÏ666ÇÞÞÇÇÇÇÇÇÇzzzÏÇÇÇÇÇÞÞÞüz—›                            ›{———{{íí{{íízzÏzÏÏÏÏÏÏÏüü66Ç66üüüüüü666Ç6Ç6666üüü
                                —zÏÏÏÏÏÏüüüüÏÏüÏüÏí›                             —z66üÏz6ÇÇÇüzzz6ÇÇÇÇÇÇÇÇÇ6zízÏÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇ6z›                     ›—{———{íí{{íízzzÏÏÏÏzÏÏÏÏü66Ç66üüüüüü6666666666üüü
                                —zÏÏÏÏÏÏüüüÏÏÏÏüÏüí›                       —üÇÞÇÇüzzzzÏÇÇÇÇ6zíz6ÇÇÇÇÇÇÇÇÇÇÇüzzzÏÇÇÇÇÇÇÇÇÇÇÇÇÇÇÏzz6ÞÇÏ›                 —{——{{íí{{íízzÏzÏÏÏÏÏÏÏÏü666Ç6üüüüüüü666666666üüü
                                —zÏÏÏÏÏÏüüüüÏüÏüÏÏí›                   ›ÏÇÞÇÇÇÇüzzízz6ÇÇÇÇ6zzz6ÇÇÇÇÇÇÇÇÇÇÇÇÇÏzzzüÇÇÇÇÇÇÇÇÇÇÇÇÇÇ6zzÏÇÇÇÇÇü›             ›—{———{íí{{ízzzÏzÏzÏzÏÏÏüü6Ç666üüüüüü66ÇÇ66666üüü
                                —zÏÏÏÏÏÏüüüüÏÏüÏüÏí›                íÇÇÇÇÇÇÇÇ6zzízz6ÇÇÇÇÇÇzzz6ÇÇÇÇÇÇÇÇÇÇÇÇÇÇ6zízz6ÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÏzzÇÇÇÇÇÇÞ6—          ›—————{íí{{íízzzÏÏÏÏÏÏÏÏÏü66Ç66üüüüüü6666ÇÇ6666üü
                                —zÏÏÏÏÏÏü6üüÏüüüüüí›             —6ÞÇÇÇÇÇÇÇÇüzzzz6ÇÇÇÇÇÇÇzzz6ÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇüzzzzÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇ6zzüÇÇÇÇÇÇÞÞ6{        ›{———{íí{{{ízzzÏzÏzÏÏÏÏÏü66ÇÇ6üüüüüü66Ç6Ç66666üü
                                —zÏÏÏÏÏÏüüüüüÏüüüüí›           íÞÇÇÇÇÇÇÇÇÇ6zzzzüÇÇÇÇÇÇÇÇÏzzüÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÏzzzÏÇÇÇÇÇÇÇÇÇÇÞÇÇÇÇÇÇÏzÏÇÇÇÇÇÇÇÇÞÞü›     ›—————{í{{{ízzzÏzÏÏÏÏÏÏÏüü6ÇÇ66üüüüü666Ç6Ç6666üü
                                —zÏÏÏüüÏü6üüüüüüüüí›        ›üÞÇÇÇÇÇÇÇÇÇÇüzzzz6ÇÇÇÇÇÇÇÇ6zzÏÇÇÞÇÇÇÇÇÇÇÇÇÇÇÇÞÇÇÞ6zzzz6ÇÞÇÇÇÇÇÇÇÇÇÇÞÇÇÇÇüzz6ÇÞÇÞÇÞÇÇÞÞÇ{    ——{—{{{{{{íízzzÏÏÏÏÏÏÏÏüü66Ç66üüüüüü666Ç6Ç666üü
                                —zÏÏÏÏÏüüüüüüüüüüüí›      —üÇÇÇÇÇÇÇÇÇÇÇÇzzzzüÇÇÇÇÇÇÇÇÞÇzzzÇÇÞÇÇÞÇÞÇÞÇÞÇÞÇÞÇÞÇÞÇ6zzzzÇÇÇÞÇÞÇÞÇÞÇÞÇÞÇÞÇÇ6zzÏÇÞÇÞÇÞÇÞÇÞÞÞí  ›—{——{{í{{{ízzÏzÏÏÏÏÏÏÏÏü66ÇÇ6üüüüüü66Ç6Ç6666üü
                                —zÏÏÏüÏüü6üüÏüüüüüí›    ›ü6ÇÇÇÇÇÇÇÇÇÞÇ6zzzz6ÞÇÇÇÇÞÇÞÇÇüzz6ÇÞÇÞÇÇÞÇÞÇÞÇÞÇÞÞÞÇÞÞÞÇÏzzzÏÞÞÇÞÇÞÇÞÇÞÇÞÇÞÇÞÞÞÇzzÏÇÞÞÞÇÞÇÞÇÞÞÞGí›—{———{íí{{ízzzÏÏÏÏÏÏÏÏÏü66ÇÇ66üüüüü666Ç6Ç666üü
                                —zÏÏÏÏüÏüü6üüüüüüüz›  ›üü6ÇÇÇÇÇÇÇÇÞÇÇüzzzÏÞÞÇÞÇÞÇÞÇÞÇÇzzÏÞÇÞÇÞÞÇÞÇÞÞÇÞÇÞÞÇÞÞÇÞÇÞÇzzzzüÞÞÇÞÞÞÞÇÞÇÞÇÞÞÇÞÇÞÇÏzzÇÇÞÞÞÞÞÞÇÞÞÞÞGz{{—{{íí{{íízzzÏÏÏÏÏÏÏÏüü6ÇÇ66üüüüüü666Ç66666ü
                                —zÏÏüÏüüüüüüüüüüüüz››ÏüÏÞÇÞÇÞÇÞÇÞÇÇÇÏzzz6ÇÇÞÇÞÞÞÇÞÇÞÞÏzz6ÞÞÞÞÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇÞüzzzzÇÞÞÇÞÇÞÇÞÞÞÞÇÞÇÞÞÇÞÇüzz6ÞÞÞÇÞÞÞÇÞÞÞÞÞGí—{{{í{{íízzÏzÏÏÏÏÏÏÏüü66ÇÇ6üüüüüü66Ç6Ç666üü
                                —zÏüÏüÏüü66üüüüüüüzüüz6ÇÇÇÇÇÞÇÞÇÞÞÇzzzzÇÞÞÞÇÞÇÞÇÞÇÞÇÇzzÏÞÞÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzüÞÞÞÞÞÞÞÞÞÇÞÞÞÞÞÞÞÞÞÞüzzüÇÞÞÞÞÞÞÞÞÞÞÞÞÞ6{—{íí{{ízzzÏÏÏÏÏÏÏÏÏü66ÇÇ66üüüüü66Ç6ÇÇ666ü
                                —zÏÏüÏüüü66üüüüüüÞüzzÇÞÇÞÇÞÇÞÞÞÞÞüzzzzÇÞÇÞÞÞÞÞÞÞÞÞÞÞüzzÇÞÞÞÞÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÇÞÞÇÞÞÞÞ6zzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞGí{íí{{íízzÏÏÏÏÏÏÏÏÏü66ÇÇ66üüüüü66ÇÇ6Ç666ü
                                —zÏüÏüüüü66üüüüÇÞzzÏÇÞÇÞÇÞÇÞÇÇÞÇüzzzÏÞÞÞÞÞÇÞÇÞÇÞÇÞÞÇzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞGí{íí{{ízzzÏzÏÏÏÏÏÏüü6ÇÇÇ6üüüüü666Ç6Ç666ü
                                —zÏüüüüüü66üü6Þzzz6ÞÇÞÇÞÇÞÇÞÞÞÞüzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞüíí{{ízzzÏÏÏÏÏÏÏÏÏü66ÇÇ66üüüüü6Ç6Ç6666ü
                                —züüüüüüü66üÞüzzzÇÞÇÞÇÞÞÞÞÞÞÞÞÏzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇÏzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞíí{{ízzzÏÏÏÏÏÏÏÏü66ÇÇ66üüüüü66ÇÇ6Ç666
                                —zÏüüüüüü6ÇGÏzzzÇÞÇÞÇÞÇÞÇÞÇÞÇüzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞGí{{ízzÏÏÏÏÏÏÏÏÏüü6ÇÇ66üüüüü66ÇÇ6Ç666
                                —züüüüüüüÞÞÏzzzÇÞÞÇÞÇÞÇÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇí{{ízzzÏÏÏÏÏÏÏüü6ÇÇÇ6üüüüü66ÇÇ6Ç666
                                —züüüüüüGÇÏzzzÇÞÇÞÞÇÞÞÞÞÞÞÞÇzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇ{{ízzÏÏÏÏÏÏÏÏÏü66ÇÇ66üüüü666Ç6Ç666
                                —züüüü6ÞÇÏzzzÇÇÞÇÇÞÞÞÇÞÞÞÞÇzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏ{íízzzÏÏÏÏÏÏÏüü6ÇÇÇ6üüüüü6ÇÇÇ6666
                                —züüüÞÞÇÏzzz6ÇÞÇÞÇÞÇÞÞÞÞÞÇzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzzÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞí{ízzÏzÏÏÏÏÏÏÏü6ÇÇÇ6üüüüü66ÇÇÇ666
                                —züüGÇÇÏzzzüÞÇÞÇÞÇÞÞÞÞÞÞÇzzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞGÏííízzÏÏÏÏÏÏÏÏü66ÇÇ66üüüü66ÇÇ6Ç66
                                —z6GÇÇ6zzzüÇÞÇÞÇÞÇÞÇÞÞÞÇÏzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzÏÞÞÞÞÞÞÞÞÞÞÞGgggÞÞÞÞÞÞÞÞÞüzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞ6í{ízzzÏÏÏÏÏÏÏüü6ÇÇ66üüüü66Ç6Ç666
                                —6ÞÇÇ6zzzÏÇÞÇÞÞÞÞÞÞÞÞÞÞüzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzzüÞÞÞÞÞÞÞGgGGGGGgÞÞÞÞÞÞÞÞÇzzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÇzííízzzÏÏÏÏÏÏÏü6ÇÇÇ66üüüü6ÇÇÇ6Ç6
                                ÏÞÇÇÇzzzzÇÇÞÇÇÇÞÇÞÞÞÞÞ6zzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzzÞÞÞÞÞGgGGGGGGGgGÞÞÞÞÞÞÞÞ6zzzüÞÞÞÞÞÞÞÞÞÞÞÞÇzííízzÏzÏÏÏÏÏÏü66ÇÇ66üüüü66ÇÇ666
                               ÏÞÇÇÇüzzz6ÇÞÇÞÞÇÞÇÞÇÞÞÇzzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGÞGÞÞÞÞÞüzzzz6ÞÞGgGGGGGGGGGGgÞÞÞÞÞÞÞÞÞÏzzÏÞÞÞÞÞÞÞÞÞÞÞÞÇízííízzÏzÏÏÏÏÏüü6ÇÇ66üüüü66ÇÇ6Ç6
                              {ÞÇÇÇ6zzzüÇÇÇÞÇÞÞÞÞÇÞÞÞüzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgggGGGGGGGggGüÏzzüGgGGGGGGGGGGGGgÞÞÞÞÞÞÞÞÞüzzzüÞÞÞÞÞÞÞÞÞÞÞÇ{ízíízzzÏÏÏÏÏÏÏü6ÇÇÇ66üüü66ÇÇ666
                              üÇÇÇÇÏzzÏÇÞÇÞÇÞÇÞÇÞÞÞÞ6zzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGGGGGGGGGGGGGGGGgggggGGGGGGGGGGGGgGÞÞÞÞÞÞÞÞÇzzzÏÞÞÞÞÞÞÞÞÞÞÞÇ{{íííízzzÏÏÏÏÏÏü66ÇÇ66üüüü6Ç6Ç66
›››››——›——›———›—————›—›—›——›—ÏÇÇÇÇ6zzzüÇÇÇÞÇÞÞÞÞÇÞÞÇÏzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGgGGGGGGGGGGGGGGggGGggggGGGGGGGGGgGÞÞÞÞÞÞÞÞÞüzzzÇÞÞÞÞÞÞÞÞÞÞ6{{{íííízzÏzÏÏÏÏÏü6ÇÇÇ6üüüü66Ç6Ç6
ÏÏÏÏÏÏÏÏÏÏÏÏÏüÏüüüüüüüüüüüüü6ÞÇÇÇÇÏzzzÇÇÇÇÞÇÇÞÇÞÞÞÞ6zzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGgGGGGGGGGGGGGggggGGggGGGGGGGGGGGGGÞÞÞÞÞÞÞÞÞÇzzz6ÞÞÞÞÞÞÞÞÞÞ6{—{íííízzzÏÏÏÏÏÏü6ÇÇ666üüü66Ç666
ÏÏÏÏÏÏÏÏÏüÏüÏüüüÏüüüüüüüüüüüÇÇÇÇÇ6zzzÏÇÇÞÇÇÞÞÞÞÞÞÞÇzzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgGGGGGGGGGGGGGGGggGGgGGGGGGGGGGGGgÞÞÞÞÞÞÞÞÞÇÏzz6ÞÞÞÞÞÞÞÞÞGüí{{{{ííízzzÏÏÏÏÏÏ66ÇÇ66üüü66ÇÇÇ6
ÏÏÏÏÏÏÏÏÏÏÏÏüÏüüüüüüüüüüüüüüÞÇÇÇÇüzzzüÇÇÇÞÇÞÞÇÞÞÞÞ6zzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGGGGGGGGGGGGGGGGGggggGGGGGGGGGGGGgÞÞÞÞÞÞÞÞÞÞüzzüÞÞÞÞÞÞÞÞÞGÇÏ{{{{íííízzÏzÏÏÏÏü6ÇÇ666üüü6Ç6Ç6
íííííííííííííííííííííííízízzÞÇÇÇÇüzzzüÞÇÞÇÞÇÞÞÞÞÞÞÏzzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgGGGGGGGGGGGGGGgÞÞgggggGGGGGGGGgGÞÞÞÞÞÞÞÞÞÞ6zzüÞÞÞÞÞÞÞÞÞ6Ïzí{—{íííízzÏÏÏÏÏÏü66ÇÇ66üüü66Ç6Ç
                           —ÞÇÇÇÇüzzz6ÇÇÇÞÇÞÇÞÞÞÞÇzzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGgGGGGGGGGGGGgGÇ66ÞÞÞÞÞÞGGgggGGgÞÞÞÞÞÞÞÞÞÞÞÇzzÏÞÞÞÞÞÞÞGG› ››—{—{ízíízzzzÏÏÏÏü6Ç666üüü66Ç66
                           —ÞÇÇÇÇüzzz6ÇÇÞÇÞÇÞÇÞÞÞÇzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgGGGGGGGGGgGÞÇzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇzzüÞÞÞÞÞGgÇ     ›—{{ízíízzÏÏÏzÏÏü6ÇÇÇ66üüü6ÇÇ6
                           ›ÞÇÇÇÇüzzzüÞÇÇÞÇÞÞÞÞÞÞÇzzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgGGGGGggGÞÞÞ6zzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzüÞÞGGGGü      ›—{—{ízíízzzÏÏÏÏÏ66Ç666üüü66Ç6
                            üÇÇÇÇ6zzzÏÇÞÇÞÇÞÇÞÞÞÞÇzzzÏÞGGgGÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇÏzz6ÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞgGGgGÞÞÞÞÞÞ6zzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzüÞGGGggí        ›—{{{ízízzzzÏÏÏÏü6ÇÇ66üüü6666
                            —ÇÇÇÇÇÏzzzüÇÞÇÞÇÞÞÞÞÞGÇÇÇÇGgGÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGÇÇÇGGGGzü›         ›—{{ízzízzÏzÏÏÏÏ66Ç666üü66Ç6
                             ÏÞÇÇÇÇÏzzzüÇÞÇÞÇÞGGGGÞÇÞÇüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÏÏüÇGGGÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÇÏzzÏÇÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGGGGGÇÇÇGÞ{››Ï—          ›—{{ízíízzÏzÏÏÏü6Ç666üüü666
                              üÞÇÇÇÇzzzzÏÇÞÞGGGggggÞzzzüÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGÞGÞGGGGGÞüÏzÏÞÞÞÞGGGGÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞ6zzzÏÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞGGGGgGGGGÞÇüí›››››íz           ›—{{zzízzzÏzÏÏü66Ç666üü6Ç6
                               üÞÇÇÇÞüzzzzÇGGGggGÞÞÇÏzzzÏÇÞÞGGGGÞÇÇüüÏzzzzzzzzzzzzzzzzzzzÏüÇÞÞGGÞGÞÞÞGGGGÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞÞüzzzÏÞÞÞÞÞÞÞÞÞÞGGGgGGggGGgGÞÏ›››››››››—ü            ›—{{ííízzÏÏzÏÏü66666üü66Ç
                                íGÇÇÇÇÇÏzÏ6ÇGgGÞÞÞÞÞGÞÇÇ6üÏzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzÏ6üü6ÇÞÞGGGGgGGÞÞÞÞÞÞÞÞÞÞÏzzzÏÞÞÞÞÞGGgGgGgGggGÞ6z—››››››››››››››ü›            —{{ííízzzzÏÏÏü6Ç666üü666
                                —ÏÞGÞÇÞÇÞÇÇGÇÇGGÇüzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzÏ6Çí›››—››{ü—{›—{zÏ6gGGGgGGGÞÞÞÞÞGÞGGGGGÞÞzÇ—›üí›››››››››››››››››››z›            ›—{{ííízzÏzÏÏÏü6Ç666ü666
                      ››—››     —Ï66ÇGÞÞGgÇÏzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzüÇ{—Çí›››››—zü{í››››››—ü››ü—››››››››››››—íÏí—6——zí—›››››—››››››››››››í{             —ííízzzzzÏÏÏÏü66Ç66üü66
                    —6—››››í6í››—Ï6666ÇGÇzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz6Ï—í{üGÇÏzí{——ÏÏ{í›››››››{6—ü—›—›—›—›—›—››—íÏz—6——zz—›—›—›››—›{—›››››››{ü             —zzzzÏÏÏüüüüüü6ÇÇ666ü6Ç
                   zí›››››››››››íÇÞÇÇÇÞzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzÏÞ{—›{í—z{í—›—›—{ÏÏzÏ{—››››››{zü—›————————›—›—íüí—6——zÏ{›››———›—›—z————————6›            —zzzzzzzzÏÏÏÏÏÏÏÏüüü666
                  Ï—›››—üí›››››››››››——{üüzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzüGÇ——›—{í—ü—{—›———í6í6—›››››››››ÏG———›—›—›—›—›—›í6{—6{—zÏí————›—————z—›—›—›—›Ï{            ›—züüüÏÏÏzzzzzzzzzzÏzÏÏ
                ›ÇüzÏÏüÏz66üÇ—››››››››››6zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzü6zíÏ————íí{í{{——›—{íü{Þ›››››››››››Ï——————————————{Ç—{ü{—züí——›——›—›——{Ï———›————Ï             ›{Ïü6ÇÇ666üüÏÏÏÏÏÏÏÏzÏ
              ›Ïüüí›››››››››—{Ï—z6ÞÇÇ6üÏzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz66í—z—{—›——{—››{—››—›—{{›››››››››››››z{—›—›————————›{6—{ü{—züí{——›————›——Ï{———————ü             ›—{íízÏüü666Ç6ÇÇÇ6ÇÇÇÇ
           {Ïí—››››{ÏÏ—›››››››Ï Ïüzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz66Ïz6Çí—›››››››››››››››››››››››››››››››››››z{—————————————{{—{ü{—z6z{————›——————Ï—————›—Ï{            —{{{íízzÏÏÏü666666666Ç
         zÇÏzÏÏÏÏzí——››{züí›››ÇÇzzzzzzzzzzzzzzzzzzzzzzzzÏÏÏÏüüü66üüzzzzzÏÏüÏzÏ6Ï—››››››››››››››››››››››››››››››››››››››zíz6ÞG6———————————íü{—z6zí————í——————íÏ——————{6           ›—{{{íízzÏÏÏü6Ç6Ç66üü6Ç
    ›íÏz{››››››››››››{z››—6››—üzzzzzzzzzzzzzzzzzzÏÏÏÏÏÏzzzzzzzzzzzzzÏÏÏÏÏÏüüü{››››››››››››››››››››››››››››››››—züÇGgÅÆÆÆÆÆÆÆÆÅ———————————zÏ{—í6zz{———z{——————z{——————6›          ›{{{{íízzÏÏÏü6ÇÇ66üü66Ç
    Ï—››››››››››››››››Ï››{Ï››ÏÏzzzÏ6Ç6üÏzzzÏü66Ç66666Þ6üüÏÏÏÏÏÏÏÏzz{—›››››››››››››››››››››››››››››››—íü6ÞgÅÆÆÆÆÆÆÆÆÆÆÅggÆÆÆÆÆÆz——————————üÏ{—íÇzzí————6———————Ç{—————Ï{          —{{{{ízzzÏÏü66666üüü666
   —{›››››››—›››{››››—í››í—›—ÞÇ6üzzÏüÇÞÞÞGüzzzzzzzzzÏÇ6zzzzzzzí—››››››››››››››››››››››››››—íÏ6ÞgÅÆÆÆÆÆÆÆÆÆÆÆÆÆÆgÞÞgÆÆGÞÞgÆÆÅGÇz——————————6z{—íGzzz{————Ï———————ü—————{z          —{{{{ízzÏÏÏü66Ç66üüü6Ç6
   Ï››››››››{Çü6ü››››Ï{››ü—6üÏü6üz{6ÇÇÇÇÇGzzzzzzzzzzÇÏz6zzí{—›››››››››››››››››››—{zÏÇGÅÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆgÞÞGÅgGÅÆÆÆÆg————————————{Çz{—íGÏzzí————íÏ——————{6—————6         ›{{{{íízzÏÏÏü6Ç666üüü666
  —Ï›››››››Ï6í—›››››—6››66zzÏ6Ïz››—ÇÇÇ6ÇÞ6zzzzzzzzzÏÇzzÏ6›››››››››››››—{íÏ6GÅÆÆÆÆÆÆÆÆÆÆÅGÞgÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÅÞÞÞÆÆÆÞÞÞÅÆÆgÞ6{———————————íüz——íÇÏzzzí————zí——————{6————ü{        —{{{íízzÏzÏÏ66Ç66üüü666Ç
  —í›››››››››››íüzzüÞ6íüÏzzí{Ïüí››üÇÇÇÇÇÞÏzzzzzzzzzz6zzzÏz››—{íz6GÅÆÆÆÆÆÆÆÆÆÆÆÆÅggÆÆG›››››íÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆGÞÞÅgGÅÆÆÆÆÆü——————————————ÏÏz——{6üzzzz—————6{——————{6———íü       ›—{{{íízzÏÏÏü66Ç66üüü6ÇÞÇ
  {{›››››››››››››Ïzzízzzzz—›››{—›{ÇÇÇÇÇÇÞzzzzzzí{——íÇüÇGÅÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÅÞÞGÆÆÅÞÞÞÆÆÅ{›››››gÆÆÆÆÆÆÆÆÆÆÆÆÆÆgÞÞGÆÆgÞÞGÆÆÆG6í——————————————üzz——{66zzzz{—————ü———————{6———ü›      ›{{{{íízzÏÏÏü66Ç66üüü6ÇÇÇ
  í—›››››››››››››Ïzzzzzzí›››››››—ÞÇÇÇÇÇÇÇzzz{——————ÏÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÞÞÞÅgGÅÆÆÆÆÆz›››››ügÇÇÆÆÆÆÆÆÆÆÆÆÆÅÞÞGÆÆÆÆÆÆÆÆÆí————————————————üzí——í6Çzzzzz{————íÏ————————6——z{      ›{{{íízzÏzÏü66Ç66üüüü666Ç
  í—›››››››››››››íüzzzz{››››››››6üÇÇÇÇÇGü——————————íÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆGÞÞgÆÆgÞÇgÆÆÅÇÏ—››››››››—ÅÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÅgÇÏ6{———————————————züzí——í6ÇÏzzzzí—————üí———————{Ç{{Ç›     —{{{íízzzÏÏü66Ç66üüüü6666
  í›››››››››››››››6zzz—››››››››üzÏÇÇÇÇÇÏz——————————{ÅÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆgÞÞGGÞGÆÆÆÆÆÆ—››››››››››››››ÞÆÆÆÆÆÆÅÞÏ—›››››››››ü———————————————{Þzz{——í6üüzzzzzí—————ü—————————6züí    ›——{{íízzÏÏÏü66Ç66üüü666Ç6
  z›››››››››››››››üzzz››››››››Ï——ÏÇÇÇü—üí——————————{üzzÇÆÆÆÆÆÆÆÆÆÆÆÆÞÞÞÆÆÆÞÞÞÆÆÆÇz{›››››››››››››››———››››››››››››››››—ü———————————————íÏzz{——z6ÏÇzzzzzz{————zÏ—————————ÏÏü    ›—{{ííízzÏÏÏü6Ç666üüü6666Ç
  z›››››››››››››››6zz{››››››{ü› —ÏÇÇÏ—íÇ{——————————{üzzzÏÏÏÅÆÆÆÆÆÆÆÆGÞGÅÆÆÆÆÆÆÆÆ6››››››››››››››››››››››››››—›››—›››››{Ï———————————————6zzz{——z6zÇzzzzzzz—————Ï{—————————íG—  ›—{{{íízzÏÏÏü66Ç66üüüü666Ç6
  Ï››››››››››››››{6zz››››››ü—   —üÞz—{zÇ———————————{üzzzzzzÞGÇgÆÆÆÆÆÆÆÆÆÆÆÆÅÞüz{—›››››››››››››››››››››››››——›››—›››››zí——————————————í6zzz{——ÏÇz6Ïzzzzzzí————{Ç——————————{Ç— ›—{{{íízzzÏÏü66Ç66üüüü6666Ç
 ›z››››››››››››››Ïzz{›››—z{     {6{—{zz6———————————{üzzzzzzzzzÞÆÆÅG6zí{—››››››››››››››››››››››››››››››››››——›››—›››››6{——————————————ÇÏzzz{——ÏÇzÏÇzzzzzzz{————íü——————z————6í—{{{ízzzzÏÏÏü6Ç666üüü66Ç666
 z{›››››››››››››{üzzzzz6í›     —z——{zzzü———————————{6zzzzzzzzzÏü›››—››—›››››››››››››››››››››››››››››››››››››››››››››—Ç——————————————íüzzzz{——ÏÇzzGÏzzzzzzz—————Ïí——————Ï————z6{{{zzzzÏÏÏüü6Ç66üüüü666666
—z››››››››››››››6zzzzzü›      Ï{——ízzzü6————————————6zzzzzzzzzzü›››››››››››››››››››z››››››››››››››››››››››››››››››››íz——————————————ÞÏzzzz———üÞzz6üzzzzzzzí————{Þ{——————Ïz———{6íízzzzÏÏÏü66Ç66üüüü66Ç666
Ï››››››››››››››íüzzzzÇ›     —ü——{zzzzÇÇÏ————————————6Ïzzzzzzzzz6ü›››››››››››››››››››››››››››››››››››››››››››››››››››Ï——————————————Ïüzzzzz———6üÏzÏ6zzzzzzzz{————íÏ———————í6{———Ï6zzzzÏÏÏü66Ç66üüü666Ç666
{››››››››››››››ÏzzzíÏ›     íÏ——{zzzüÇÇÇÏ————————————ÏüzzzzzzzzzüÇ{››››››››››››››››››››››››››››››››››››››››››››››››››Ï—————————————{6zzzzzí———6ÏÇzzÇzzzzzzzzz{————6Ï{———————6z———íÞzzÏÏÏÏü6Ç66üüüü66Ç66Ç6
›››››››››››››››üz{—{í     zí——ízzzÇÇÇÇÇü————————————í6zzzzzzzzzÏüü›››››››››››››››››››››››››››››››››››››››››››››››››íÏ—————————————ÇÏzzzzzí———6züüz6üzzzzzzzzz—————Çz{———————Ç6———{Ç6ÏÏÏÏ66Ç66üüüü666Ç666
››››››››››››››íz›››Ï     Ï{——zzzzÇÇÇÇÇÇ6—————————————6zzzzzzzzzÏ6Ïü››››››››››››››››››››››››››››››››››››››››››››››››Ï{————————————züzzzzzzí———6zzÇzÏÞzzzzzzzzzz————íÇzí——————íü6{———ÏÞÏÏü66Ç66üüüü6666ÇÇ6
››››››››››››››ü—››{{    üí—{zzzzüü6Ç6ÇÇÇ—————————————ÏzzzzzzzzzzÇzzü{›››››››››››››››››››››››››››››››››››››››››››››—Ï————————————íÇzzzzzzz{——{6zzÏÇzÇÏzzzzzzzzzí————Ïüzí——————ÏzüÏ———{Þüü66Ç6üüüü66666666
›››››››››››››í{›››ü›   zí—ízzzÏ6{üÇÇÇÇÇÞ—————————————zÏzzzzzzzzzÞÏzzÏÏ—›››››››››››››››››››››››››››››››››››››››››››{{———————————{Çzzzzzzzz———í6zzz6üüüzzzzzzzzzzí————6zzí——————6zÏÇ{———ÏÞ6666üüüü66Ç66Ç66
›››››››››››››››››zí   zz{zzzzzÏ {ÏÇ6ÇÇÇÞ{————————————{6zzzzzzzzzÏüzzzzüÏ—›››››››››››››››{í——íÏ6üÏÏ—›››››››››››››››Ï————————————ÞÏzzzzzzzü{——üüzzzzÇÏ6zzzzzzzzzzz{———zÇzzí—————íÇzzÞz———{ÞÇ66üüüü666Ç6Ç66
›››››››››››››››››Ï   —Ï{Ïzzzz6› {üÇÇ6ÇÇÞz—————————————ÇÏzzzzzzzzz6zzzzzzÏü—››››››››››››—{ÏÏ6{››››››››››››››››››››{Ï———————————6GzzzzzzzzÏ———ÞÏzzzzüÞÞzzzzzzzzzzzz{———Çüzzí—————züzzüÞ{———üÇüüüüü6Ç66Ç666
››››››››››››››››íí  —Ç—üzzzzü—  {ü6ÇÇÇÇÇü—————————————íüzzzzzzzzz6üzzzzzzzzÇí››››››››{ÏüÇÞ{››››››››››››››››››››ÏÇ6———————————ÏÇÇzzzzzzz6í——{GzzzzzzüGüzzzzzzzzzzzz{——{6zzzí—————6ÏÏÏÏGz———zGüüü666Ç66666
››››››››››››››››6›  Ï—ÏzzzzüÏ  ›{üÇÇÇ6ÇÇÇ——————————————6zzzzzzzzzzÇzzzzzzzzzzü6—››íüü6Þgí›››››››››››››››››››íÇÏzÏz——————————z6üÏzzzzzzÏÏ———íÇzzzzzzzÇÇzzzzzzzzzzzzz———6Ïzzzí—————ÇÏÏÏüÇü———{Güü66Ç6ÇÇ666
›››››››››››››››íí  {z—Ïzzzz6    {üÇÇÇÇÇÇÞz————————z————üÏzzzzzzzzzüüzzzzzzzzzzzÏÏü6ÇGg{››››››››››››››››››—6ÏzzzzÞ{—————————íÇz6zzzzzzz6————züzzzzzzzzÇÏzzzzzzzzzzzzí——{Çzzzzí————{ÞÏÏü6ÇÇ————Ç666ÇÇ6Ç666
›››››››››››››››Ï  ›ü——ÏzzzÏí    {üÇÇÇÇÇÇÇÞ———————{ü————{ÇzzzzzzzzzzÞÏzzzzzzzÏÏÏü6ÞggÞ{››››››››››››››››—Çüzzzzzzüz—————————{Çzz6zzzzzzüÏ————üzzzzzzzzzzÞÏzzzzzzzzzzzzí——üÏzzzzí————í6Ïü66ÇÞ{———ÇÇ6Ç6Ç6666
››››››››››››››íz  {í—{ÏzzzÞ›    {üÇÇÇÇÇÇÇgz——————{6{————ÏÏzzzzzzzzzÏ6zzzzzzÏÏ6ÇÞgGüüzzÏ6Ï››››››››››—ÇGÏzzzzzzzz6—————————íÞzzz6zzzzzz6—————6zzzzzzzzzzzÇÏzzzzzzzzzzzz——íÇzzzzzí————ÏÇü66ÇÇz———{ÞÇÇÇ6Ç666
››››››››››››››ü›  Ï———üzzÏz     {üÇÇÇÇÇÇÞz6——————z6{————{6zzzzzzzzzzü66Ç6üÏü6ÞGgü6Ï6zzzzzÏü6Ï{››{6GgGÏzzzzzzzz6z————————{ÇzzzÏ6zzzzzÏz————{6zzzzzzzzzzzzÇüzzzzzzzzzzzí—{ÞÏzzzzzí————ÏÇ6666Þ————zÞ6ÇÇ666ü
›››››››››››››—í  ›z———Ïzz6›     {ü6ÇÇÇÇÞÏzüÏ————{z6{—————Ïüzzzzzzzz6gÅggGÞÇÞGg6zz6Ï6zzzzzzzzzzÏÏzÇgÇzzzzzzzzzÏü————————{Çzzzz6üzzzzÏÇ—————züzzzzzzzzzzzzzÇüzzzzzzzzzzz{—ÇÏzzzzzzí————üÇÇ66Gí————ÇÇÇ6Ç66ü
›››››››››››››z—  ›z———Ïzzü      {üÇÇ6ÇÇÏzzz6{———{z6{——————ÇzzzzzzÏÇÇÞgÅÆÅggG6zzzz6z6zzzzzzzzzzzzzüÇzzzzzzzzzz6{———————íÞzzzzzÇÏzzzz6{—————üÏzzzzzzzzzzzzzzüÇÏzzzzzzzzzz{Ï6zzzzzzzí————üÇ66Çz————zÞÇÇ666ü
››››››››››››—6   ›í———íüÏÏ     ›{ÏÇÇÇÞüzzzz66———íz6í——————züzzzzzüÞü66GÆÅg6zzzzzÏÇz6zzzzzzzzzzzzÏüÇzzzzzzzzzü6———————{6zzzzzzÇzzzzüÏ——————6zzzzzzzzzzzzzzzzÏÞÏzzzzzzzzzzíÇzzzzzzzz{————6Ç6ÇÏ————{gÇ6Ç66ü
››››››››››››íí   ›z————6üí      {üÇÇÇüzzzzÏ66z——zz6{———————ÇÏzzzzz6ÞÇ6GÅüzzzzzzz66z6zzzzzzzzÏÇ6zííÇzzzzzzzzzÇ———————íÞzzzzzzÏ6zzzÏ6——————{ÞzzzzzzzzzzzzzzzzzzÇüzzzzzzzzzzÇzzzzzzzzz—————66ÇÏ————{GÇ6666ü
››››››››››››Ï›    Ï————{Þí     ›{üÇÇÞzzzzz6Ïz6—ízz6{———————{6zzzzzzzÏüüzzzzzzzzzÇzzÇÏÏÏüü6Ç6zííííí6zzzzzzzzÏÏ——————{6zzzzzzzüÏzzÏ6———————íÏ6ÏzzzzzzzzzzzzzzzzzüÇzzzzzzzzÏÞzzzzzzzzzí—————ÇÇz—————ÞÇÇ666ü
››››››››››››z     {{————ÏÏ      {üÇÇzzzzzz6zzü6zzz6{————————üzzzzÇüzzí{{{——›››{zízííííííííííííz6üÇÇzzzzzzzzÞ{—————{6zzzzzzzzÇÏzÏÇ{———————ÏzíÏüzzzzzzzzzzzzzzzzzÏÇüzzzzzzÏÞzzzzzzzzzzí————{gí—————ÞÞ6Ç66ü
›››››››››››{í     ›z—————zz    ›{üÞüzzzzzz6zzz6üzz6{————————ÏGGgG—›››››››››››››{ííííííííííííízÇzzz6zzzzzzz6z——————6zzzzzzzzÏ6zz6í————————6í—››í6ÏzzzzzzzzzzzzzzzzüÞÏzzzzüÇzzzzzzzzzzz{———{Þ{—————ÞÞ666üü
›››››››››››ü—      z{—————zí    {üÇzzzzzzz6zzzÏÇÏzü—————————{GGG{›› › › › › ››››{íííííííííííí6zzzz6zzzzzzzÇ——————6zzzzzzzzz6üz6í————————zz› ››››{6üzzzzzzzzzzzzzzzz6Çzzz66zzzzzzzzzÏzz———{ü——————ÞÞ666üü
›››››››››››6       ›Ï——————íü› ›{6ÏzzzzzzÏüzzzzü6Ïü——————————ÇGz› › › ››››››› ›››{ííííííííííÇÏzzzÏ6zzzzzzÇz—————6ÏzzzzzzzzzÇÏ6z—————————Ï›››› ›››››—6üÏzzzzzzzzzzzzzzÇ6ÏÞÏzzzzzÏzÏzzzÏí——{——————{GÇ666üü
››››››››››—z        íí———————Ç— {ÇÏzzzzzzzüzzzzzÇÏÏ——————————Ïü››› ››› ›› › ››› ››{ííííííííÏüzzzÏÞzzzzzzÏü—————zÏzzzzzzzzüGÇüz——————————Ï› ››› › ››››››üÇÏzzzzzzzzzzzzÏÞÞÏzzzzzzzzzÏzzz—————————íG6666üü
››››››››››í—         {z———————züí6zzzzzzzÏ6zzzzzügí——————————íz› › › ›› ››››› ››› ›{íííííííÇzzzzÇzzzzzzzÇ{————{6zzzzzzz66ízÇÏ——————————{í›› ›››››› ››››› ››ÏÇ6zzzzzzzzzzzÞüzzzzzzÏzÏzÏzz————————6ÇÇ666üü
››››››››››í›          {ü————————zÞÏzzzzzzzÇzzzÏÞzÇ———————————{z› › ›› ›› ›› ››› ››››—íííííüüzzzzzzzzzzzüÏ—————ÞÏzzzzzÇüíííüÏ———————————6—››› › › ››› ›››› ›››››—üÞ6ÏzÏzzzÏÏÞüzzÏzzzzzzÏz{——————íÞ66666üü
››››››››››z            —ü—————————zÇzzzzzzÇÏüü—›{í———————————{Ï › › › ››› ››› ››› › ›—íííz6zzzzzzzzzzzzü—————zÞÏzzÏÞÏííí—zÏ———————————{ü›› ››››››› ››› ›››› › ››››››íÇ6ÏzzzzÏGÏzzzÏÏÏzÏÏz—————íGÇÇ666üüü
››››››››››Ï             ›Ï——————————íÇíízÞGÏ››››ü————————————{ü›››››››››››› ››››››››› ›ííü6zzzzzzzzzzz6z————{Ç6ÏÏÇz{—›››Ïz————————————Ï—›››› ››››››› ››› ›››››› › ›››í6g6zÏzÏz6ÇÏÏzzÏzÏzÏ{—————üÇÇ666üüü
›››››››››{z              ›üí——————————z6››—ü›› íÏ—————————————Ï›› › › › › ›››› › › ›››››{ÇzÏÇzzzzzzzzÏÏ—————üÏÏÞ—››››››Ï{————————————{Ï›››››› ›› › ››› ›››››››››››ÏGGGGÞ6Ç6ÏzÏÏÏÞÏÏzÏÏÏÏÏí——————ÇÇ666üüü
›››››››››z{                íü———————————z6——6››ü{————————————{í›››››››››››› ››››››››› ››z{{zzzzzzzzzzü——————6zÏü››› ››ü{—————————————6› ›› ››› ››››› ››› ›› ›› ›6GGGGü—››››{ÇÏzÏÏÇÏÏÏzÏÏÏz——————üÇ666üüü
›››››››››Ï›                {ü6{———————————Ï6›Ï{z—————————————{{››› ›››››› ››› › › › ›› ›ü›››—ízzzzzz{Ï—————í6zÏü›››››6{—————————————Ï{››››› ››› › ›››› ›››››››6GGGGÏ›››› ››››íüÏzÏÇüÏÏÏÏÏz{—————zÇ666üüü
›››››››››Ï            ›{zí—›››üí————————————üzü{—————————————í›››››› ›› ›››››››››› ››› —Ï››››››››››››Ï—————6üÏzüü››{ü——————————————z{› ›› ››› ›››››› ››› › ›üGGGGÏ›››››››››› ››6ÏÏÏÇÏÏÏzÏÏ{—————zÞ666üüü
››››››››—Ï        ›{zí›› ›› ›› {Ï————————————Þz—————————————{Ï› › ››››››› › › ›  › › › Ïí›››››››››››—Ï—————ÞÏÏÏz6{íí——————————————íí›››››  ›››› › ››››››››íGGGGÇ—›› › › ›› ›››››6ÏÏüÇÏÏÏÏÏí—————ÏÇ666üüü
››››››››—z    ›{zz—››› › › › ›››—6{—————————ü{——————————————z››››››› › ››››››››››››››››Ç—›››››››››››{z————{GÏzÏÏzÇz——————————————zz›››› ›››› ››››› ››› ››6GGGG6››››››››››››› ›››{6ÏÏÇÏÏÏÏÏz—————üÇ666üüü
››››››››z{ —z6ü››› › ›› ›››››› ›››üí———————z{——————————————{í›› › ›››››› ›› ›› › › › ›{ü›››››››››››—üí————{ÇÏÏÏz{íÏ—————————————zz›› ›››› ››› › ›››››››{GGGGGü››› ››› › › ›››› ››ÏÏÏ6üÏÏÏÏz—————6666üüüü
››››››››ü{ü—›››í—›› › ›› › › ›› › ›íz—————Ïí———————————————ü› ›››››› › ›››››››››››››››í{›››››››››—Ïízí————{ÏÏÏÏí——ü{———————————zz›››››› ››››››››› › ››{ÞGGGG6›››››››››››››› ›››› —ÇÏüüÏÏÏÏí————{Þ6666üüü
›››››››—6Ï6— ›››z—›› › › ››››››››› ›zz———{í———————————————z›› ›› › ››››› › › ›› ›› › ›ü››››››››—Ïz››{Ï————{ÏÏÏÏ{——{ü——————————Ï{› › › ››› ›› ›› ›››››ÏGGÞGGÇ›› › ›› ›› ›› ››› › ››üü6üÏÏÏÏ{————6Ç666üüüü
›››››››zÞüÏ6{› ››z›› ››››› › › › ››››Ïz——ü———————————————z{››››››››› › ››››››››› ››››—ü›››››››zÏ››››—Ï————{ÏÏÏz————üz————————6{›››››››› ›››› ›››› ››6GGGGÞÞ››››››››› ›››››› ››››››—66üÏÏÏÏ{———íÞ6666üüüü
›››››››ü›—zzü—› ›{í› ›› ››››››› › › ››ü{zí——————————————{í›› › › › ››››› ›› ›› ››››››zz›››››íü›››› ››ü—————ÏÏÏí—————ü———————ü—›››› ›› ››› ››› › ›››ÇGGÞGGGí›› ›› › ››› › ›››››› ›››üÞÏÏÏÏz————ÇÇ6666üüüü
›››››››ü››{zzÇ›› ›ü›› ›››››› ›››››››››—zÏ——————————————íÏ››››››››››››› ››››››››››› ››ü{›››{6›››› ››››z{————zÏÏí—————Ïí————{6››› ››››››››››››››››››ÞGÞGÞGGü›››››››››››››››››››››››››ü6ÏÏÏÏ{—í——ÇÇÇ666üüüü
››››››{Ï››—zzzÏ› ›{{››› › ››› › › › ››—6ü————z————————{z› › ›››› ››››››› ›› ›› ››››››6››—Ç—››››››› ››{6—————zÏ{—————{Þ———íü››››››› › ›››› ›› ›› {GGÞGGGÞÞ—›› › ›› ››››››››››››› ›››z6ÏÏÏz——ÇG{ÏÞ6Ç66üüüü

                `}
            </div>

        </div>
    );
}

export default App;
