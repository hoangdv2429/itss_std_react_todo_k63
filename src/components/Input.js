import React, { useState } from "react";
/* 
  【inputコンポーネント】
 ・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
 ・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input({ onSubmit }) {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  }

  return (
    <div className="panel-block">
      <input className="input" type="text" placeholder="Todo を入力してください" onKeyDown={handleEnter}></input>
    </div>
  );
}

export default Input;
